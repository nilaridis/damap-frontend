import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {Repository} from '../../domain/repository';
import {LoadingState} from '../../domain/enum/loading-state.enum';
import {Dataset} from '../../domain/dataset';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/states/app.state';
import {Observable} from 'rxjs';
import {
  selectRecommendedRepositories,
  selectRecommendedRepositoriesLoaded,
  selectRepositories,
  selectRepositoriesLoaded
} from '../../store/selectors/repository.selectors';
import {loadAllRepositories, loadRecommendedRepositories, loadRepository} from '../../store/actions/repository.actions';

@Component({
  selector: 'app-dmp-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {

  repositoriesLoaded$: Observable<LoadingState>;
  repositories$: Observable<Repository[]>; // Repo list loaded from backend
  recommendedLoaded$: Observable<LoadingState>;
  recommended$: Observable<Repository[]>;

  @Input() dmpForm: FormGroup;
  @Input() repoStep: FormArray;
  @Input() datasets: FormArray;

  @Output() repositoryToAdd = new EventEmitter<any>();
  @Output() repositoryToRemove = new EventEmitter<any>();

  LoadingState = LoadingState;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public store: Store<AppState>) {
  }

  ngOnInit() {
    this.repositoriesLoaded$ = this.store.pipe(select(selectRepositoriesLoaded));
    this.repositories$ = this.store.pipe(select(selectRepositories));
    this.recommendedLoaded$ = this.store.pipe(select(selectRecommendedRepositoriesLoaded));
    this.recommended$ = this.store.pipe(select(selectRecommendedRepositories));
    this.getRecommendedRepositories();
    this.getRepositories();
  }

  addRepository(repo: Repository) {
    this.repositoryToAdd.emit(repo);
  }

  removeRepository(index: number): void {
    this.repositoryToRemove.emit(index);
  }

  getRepositoryDetails(repo: Repository) {
    if (!repo.description) {
      this.store.dispatch(loadRepository({id: repo.id}));
    }
  }

  getDatasetsMarkedForDeletion(index: number): Dataset[] {
    const repo = this.repoStep.at(index);
    return this.datasets.value.filter(item => item.delete && repo.value.datasets.includes(item.referenceHash));
  }

  getDatasetsMarkedForDeletionAsString(index: number): string {
    const datasets: Dataset[] = this.getDatasetsMarkedForDeletion(index);
    let result = '';
    for (const [i, item] of datasets.entries()) {
      result += '\"' + item.title + '\"';
      result += (i < datasets.length - 1) ? ', ' : '';
    }
    return result;
  }

  private getRecommendedRepositories() {
    this.recommendedLoaded$.subscribe(loaded => {
      if (loaded === LoadingState.NOT_LOADED) {
        this.store.dispatch(loadRecommendedRepositories());
      }
    });
  }

  private getRepositories() {
    this.repositoriesLoaded$.subscribe(loaded => {
      if (loaded === LoadingState.NOT_LOADED) {
        this.store.dispatch(loadAllRepositories());
      }
    });
  }
}
