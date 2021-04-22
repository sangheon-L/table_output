/*변수 선어*/
var heightTotal, ageTotal, scoreTotal, heigtAvg, ageAvg, scoreAvg;
/*이름 변수 선언*/
var name_1, name_2, name_3, name_4, name_5;
name_1 = '홍길동';
name_2 = '박길동';
name_3 = '김길동';
name_4 = '이길동';
name_5 = '최길동';
/*인원수*/
var countLeng = 5;

/*나이변수 선언*/
var age_1, age_2, age_3, age_4, age_5;
age_1 = 30;
age_2 = 18;
age_3 = 21;
age_4 = 35;
age_5 = 38;
/*나이평균*/
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5;
ageAvg = ageTotal/countLeng;
console.log('나이 합산 : '+ageTotal);
console.log('평균 나이 : '+ageAvg);

/*키변수 선언*/
var height_1, height_2, height_3, height_4, height_5;
height_1 = 175;
height_2 = 180;
height_3 = 190;
height_4 = 185;
height_5 = 178;
/*키평균*/
heightTotal = height_1 + height_2 + height_3 + height_4 + height_5;
heightAvg = heightTotal/countLeng;
console.log('키 합산 : '+heightTotal);
console.log('평균 키 : '+heightAvg);

/*점수변수 선언*/
var score_1, score_2, score_3, score_4, score_5;
score_1 = 85;
score_2 = 88;
score_3 = 90;
score_4 = 95;
score_5 = 95;
/*점수 평균*/
scoreTotal = score_1 + score_2 + score_3 + score_4 + score_5;
scoreAvg = scoreTotal/countLeng;
console.log('점수 합산 : '+scoreTotal);
console.log('평균 점수 : '+scoreAvg);

/*document table 출력*/
var list = '<table>';/*table 요소를 담을 변수 선언 및 초기화*/
list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';
list += '<tr><td>'+name_1+'</td><td>'+age_1+'</td><td>'+height_1+'</td><td>'+score_1+'</td></tr>';
list += '<tr><td>'+name_2+'</td><td>'+age_2+'</td><td>'+height_2+'</td><td>'+score_2+'</td></tr>';
list += '<tr><td>'+name_3+'</td><td>'+age_3+'</td><td>'+height_3+'</td><td>'+score_3+'</td></tr>';
list += '<tr><td>'+name_4+'</td><td>'+age_4+'</td><td>'+height_4+'</td><td>'+score_4+'</td></tr>';
list += '<tr><td>'+name_5+'</td><td>'+age_5+'</td><td>'+height_5+'</td><td>'+score_5+'</td></tr>';
list += '<tr><td>평균</td><td>'+ageAvg+'</td><td>'+heightAvg+'</td><td>'+scoreAvg+'</td></tr>';
list += '</table>';

document.body.innerHTML = list;
