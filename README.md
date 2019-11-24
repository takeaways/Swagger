"# Swagger"

### Swagger를 활용한 API 명세와 개발 협업

1. 개발자간의 소통을 위해서 API 명세를 위한 Swagger를 많이 사용한다.
2. 백 엔드 프로그램과 프론트 엔드 프로그램 사이에서 정확히 어떠한 방식으로 데이터를 구조 받을 지에 대한 명세를 한다
3. 스웨커 페이지에서 바로 테스트도 활용이 가능하다
4. https://app.swaggerhub.com/home

<pre>
<code>
openapi: 3.0.0
info:
  version: '1.0.0'
  title: 'API_Example'
  description: 'Swagger 실습을 위한 예'
# Added by API Auto Mocking Plugin
servers:
  - description: SwaggerHub API Auto Mocking
    url: https://virtserver.swaggerhub.com/nomadGeonilJang/API_Eamaple/1.0.0
  - description: use json plceholder api 
    url: https://jsonplaceholder.typicode.com
  - description: Google API
    url: https://www.google.com
paths:
  /todos/{id}:
    get:
      summary: Return a user by ID
      parameters:
        - name: id
          in: path
          required: true
          description: The Id of the user to return
          schema:
            type: integer
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  userId:
                    type: integer
                  id:
                    type: integer
                  title:
                    type: string
                  completed:
                    type: boolean
  /complete/search:
    get:
      summary: 자동완성 검색 결과를 반환합니다.
      parameters: 
        - name: q
          in: query
          schema: 
            type: string
        - name: client
          in: query
          schema:
            type: string
      responses:
        '200':
          description: A Text File
          content:
            text/plain:
              schema:
                type: string
          
</code>
</pre>

### NodeJS 를 이용한 설치형 Swagger를 종속시켜서 사용해보기

1. github 해당 경로 https://github.com/swagger-api/swagger-ui 에서 dist 파일을 node project의 public 폴더에 널어 준다
2. 해당 dist 폴더 안에 index.html 내부의 url 주소를 api를 요청하는 yaml 파일이 있는 경로를 적어준다.
3. yaml 파일만 잘 변경 해주면 바로 사용이 쉽다!!
<pre>
<code>
openapi: 3.0.0
info:
  version: "1.0.0"
  title: "My API"
  description: "MYMY"
servers:
  - description: MyAPI
    url: http://localhost:8080/                       API를 요청할 주소를 입니다.
  - description: use json plceholder api
    url: https://jsonplaceholder.typicode.com
  - description: Google API
    url: https://www.google.com
tags:
  - name: chatbot                                     묶음을 만들어 주기위해 태그만들기
    description: Everything about chatbot
    externalDocs:
      description: 여기서 찾아보세요!
      url: "http://www.naver.com"
paths:
  /adder:                                             해당경로에 method 마다 명시 
    get:
      summary: Adder API
      parameters:
        - name: one
          in: query                                   쿼리로 보낼 데이터라고 명시
          description: First Value
          required: true                              require 확인                            
          schema:
            type: integer                             전달 데이터의 형식 작성
        - name: two
          in: query
          description: Second Value
          required: true
          schema:
            type: integer
      responses:                                     해당 요처에 응답값 정보
        "200":
          description: Added Result
          schema:
            type: integer
    post:
      summary: Adder API
      parameters:
        - name: one
          in: query
          description: First Value
          required: true
          schema:
            type: integer
        - name: two
          in: query
          description: Second Value
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Added Result
          schema:
            type: integer
  /todos/{id}:
    get:
      summary: Return a user by ID
      parameters:
        - name: id
          in: path                                 path 경로에 추가 해할 경우 path로 작성
          required: true
          description: The Id of the user to return
          schema:
            type: integer
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  userId:
                    type: integer
                  id:
                    type: integer
                  title:
                    type: string
                  completed:
                    type: boolean
  /todos/:
    get:
      tags:
        - chatbot
      summary: 자동완성 검색 결과를 반환합니다.
      parameters:
        - name: q
          in: query
          schema:
            type: string
        - name: client
          in: query
          schema:
            type: string
      responses:
        "200":
          description: A Text File
          content:
            text/plain:
              schema:
                type: string
    post:
      tags:
        - chatbot
      summary: 자동완성 검색 결과를 반환합니다.
      parameters:
        - name: q
          in: query
          schema:
            type: string
        - name: client
          in: query
          schema:
            type: string
      responses:
        "200":
          description: A Text File
          content:
            text/plain:
              schema:
                type: string
    put:
      tags:
        - chatbot
      summary: 자동완성 검색 결과를 반환합니다.
      parameters:
        - name: q
          in: query
          schema:
            type: string
        - name: client
          in: query
          schema:
            type: string
      responses:
        "200":
          description: A Text File
          content:
            text/plain:
              schema:
                type: string
  /complete/search:
    get:
      summary: 자동완성 검색 결과를 반환합니다.
      description: >-
        Muliple tags can be provided with comma separated strings. Use\ \ tag1,
        tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          required: true
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
        "400":
          description: Invalid tag value
      deprecated: true                               사용경고

</code>
</pre>