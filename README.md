# node-design-pattern

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wikiti/pandoc-book-template/blob/master/LICENSE.md)

## Description

[노드JS 디자인패턴 바이블](https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Edition)을 읽고 노드JS 커뮤니티가 추구하는 철학과 디자인 패턴들을 코드로 정리하는 공간입니다. 코드의 출처는 @Mario Casciaro @Luciano Mammino 저자분들이 작성한 책의 코드이며, 추가적으로 제가 학습한 코드를 작성할 예정입니다. 

## Index

- [모듈(module)]()
  - [노출식 모듈 패턴(Revealing Module Pattern)]()
  - [CommonJS Way]()
    - 모듈 로더(CommonJs require copy)
      - module.exports와 exports 사용 차이
    - 순환 종속성
    - 모듈 정의 패턴
      - Named exports
      - 함수 내보내기(서브 스택 패턴)
      - 클래스 내보내기
      - 인스턴스 내보내기
      - 몽키 패치
  - [ESM Way]()
    - Named exports and imports
    - Default exports and imports
    - Mixed exports
    - 비동기 임포트
    - 읽기 전용 라이브 바인딩
    - 순환 종속성 분석
    - 모듈 수정
- [Callback 과 Event]()
  - [콜백 패턴]()
    - 동기식 연속 전달 방식
    - 비동기식 연속 전달 방식
    - 예측할 수 없는 함수 문제
    - Zalgo의 사례
    - 동기 API 사용(Zalgo 사례 예방)
    - 지연실행으로 비동기성 보장
    - 콜백 규칙
    - 캐치되지 않은 예외(fail-fast 접근법)
  - [관찰자 패턴(The observer pattern)]()
    - EventEmitter 클래스
    - EventEmitter 생성 및 사용
    - 오류 전파
    - 관찰 가능한 객체 만들기
    - Eventemitter와 메모리 누구
    - 동기 및 비동기 이벤트
- [Callback을 사용한 비동기 제어 흐름 패턴]()
  - [비동기 프로그래밍의 어려움]()
    - 간단한 웹 스파이더 만들기
    - 콜백 모범 사례와 제어 흐름 패턴

## Folder structure

주제별 폴더 구조입니다.

```
주제/
|- src/         # 소스 코드를 작성하는 공간입니다.
|- README.md    # 간략한 설명을 작성해주세요.
```

## Contribution

## Contributors

This project has been developed by:

| Avatar                                                                                         | Name       | Nickname | Email                                       |
| ---------------------------------------------------------------------------------------------- | ---------- | -------- | ------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/39932141?v=4" width="100px" height="100px"/> | Haneul Lee | le2sky   | [le2sky@kakao.com](mailto:le2sky@kakao.com) |
