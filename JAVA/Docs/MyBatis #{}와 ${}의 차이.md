# >>MyBatis 문법- **#{}** / **${}** 의 차이

## **학습 목표**

    mapper 쿼리문 작성시 파라미터 값을 받아오려면 $와 #을 사용해야 한다.
    이 둘은 사용 용도부터 주의점까지 비슷한 것 같지만 엄염히 다르다고 할 수 있다.

---

## **#{} 사용법**

```sql
<select id="intNameCheck">
    SELECT
        *
    FROM
        tbl_user1
    WHERE
        id = #{id}
</select>
```

MyBatis에서 위와 같은 #{}이 사용된 쿼리문이 실행되면 아래와 같이 쿼리문에 ?가 생기며 파싱된다.

```sql
SELECT
    *
FROM
    tbl_user
WHERE
    id = ?
```

#{}의 경우 위의 ? 위치에 파라미터가 바인딩 되어 쿼리문이 실행된다.

변수에 작은 따옴표''가 자동으로 붙여 쿼리가 수행(id = 'kwan')되기 때문에 아래와 같은 방식은 문법에러(SQLSyntaxErrorException)을 발생 시킨다. (${} 사용이 적합)

```sql
-- tbl_user1과 tbl_user2 테이블이 존재한다고 가정

SELECT
    *
FROM
    tbl_#{user} --Error => tbl_'user1', tbl_'user2'로 인식하기 때문
WHERE
    id = #{id}
```

---

## **${} 사용법**

```sql
<select id="intNameCheck">
    SELECT
        *
    FROM
        tbl_${user}
    WHERE
        id = #{id}
</select>
```

파라미터 값이 그대로 적용되어 쿼리문이 실행된다.

#{}의 반대로 작은따옴표''가 붙지 않기 때문에 위처럼 테이블명 이나 컬럼명을 동적으로 조회 및 생성 해야 할 때 주로 사용한다.

**${}** 의 단점으로 대표적인 SQL Injection이 있다.<br>
그러므로 사용자의 입력을 전달해야 할때는 사용하지 않는 것이 좋다.

> **\*SQL Injection이란?** <br><br>
> 웹 사이트의 보안상 허점을 이용해 특정 SQL 쿼리문을 전송하여 공격자가 원하느 DB의 정보(=데이터)를 가져오는 해킹 방법이다.
