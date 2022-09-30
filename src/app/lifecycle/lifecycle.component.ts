import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string = '';

  @ViewChild('content') content: ElementRef;

  constructor() {
    console.log('constructor calld');
  }

  //@input 변경 될때 실행
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges calld');
  }

  //초기화가 완료된 시점에 한 번만
  ngOnInit() {
    console.log('ngOnInit calld');
  }

  // 모든 변경 감지
  ngDoCheck() {
    console.log('ngDoCheck calld');
  }

  //ngContent 디렉티브를 사용하여 자식 컴포넌트에 부모 컴포넌트의 템플릿 조각을 전달(content projection)한 이후 호출
  ngAfterContentInit() {
    console.log('ngAfterContentInit calld');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked calld');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit calld');
    console.log(this.content.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked calld');
  }

  //컴포넌트나 디렉티브가 소멸하기 이전
  ngOnDestroy() {
    console.log('ngOnDestroy calld');
  }
}
