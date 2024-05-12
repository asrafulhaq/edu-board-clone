const markSheet = document.getElementById("mark-sheet");

// get search result
const searchData = JSON.parse(localStorage.getItem("searchData"));
if (!searchData) {
  window.location.href = "/index.html";
}

markSheet.innerHTML = `
<div class="result-sheet">
<h2>SSC/Dakhil/Equivalent Result 2015</h2>
<div class="edu-student-info">
  <table>
    <tr>
      <td>Roll No</td>
      <td>${searchData.roll}</td>
      <td>Name</td>
      <td>${searchData.name}</td>
    </tr>
    <tr></tr>
    <tr>
      <td>Board</td>
      <td>${searchData.board}</td>
      <td>Father's Name</td>
      <td>${searchData.father}</td>
    </tr>
    <tr>
      <td>Group</td>
      <td>${searchData.group}</td>
      <td>Mother's Name</td>
      <td>${searchData.mother}</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>${searchData.type}</td>
      <td>Date of Birth</td>
      <td>${searchData.dob}</td>
    </tr>
    <tr>
      <td>Result</td>
      <td>${
        resultSystemPro({
          bangla: searchData.results.bangla,
          english: searchData.results.english,
          math: searchData.results.math,
          science: searchData.results.science,
          social: searchData.results.social,
          reli: searchData.results.religion,
        }).grade
      }</td>
      <td>Institute</td>
      <td>${searchData.inst}</td>
    </tr>
    <tr>
      <td>GPA</td>
      <td colspan="3">${
        resultSystemPro({
          bangla: searchData.results.bangla,
          english: searchData.results.english,
          math: searchData.results.math,
          science: searchData.results.science,
          social: searchData.results.social,
          reli: searchData.results.religion,
        }).gpa
      }</td>
    </tr>
  </table>
</div>

<h2>Grade Sheet</h2>
<div class="edu-student-grade-sheet">
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Subject</th>
        <th>Grade</th>
        <th>GPA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>101</td>
        <td>BANGLA</td>
        <td>${getGradeAndGPA(searchData.results.bangla).grade}</td>
        <td>${getGradeAndGPA(searchData.results.bangla).gpa}</td>
      </tr>
      <tr>
        <td>102</td>
        <td>ENGLISH</td>
        <td>${getGradeAndGPA(searchData.results.english).grade}</td>
        <td>${getGradeAndGPA(searchData.results.english).gpa}</td>
      </tr>
      <tr>
        <td>103</td>
        <td>MATHEMATICS</td>
        <td>${getGradeAndGPA(searchData.results.math).grade}</td>
        <td>${getGradeAndGPA(searchData.results.math).gpa}</td>
      </tr>
      <tr>
        <td>104</td>
        <td>SCIENCE</td>
        <td>${getGradeAndGPA(searchData.results.science).grade}</td>
        <td>${getGradeAndGPA(searchData.results.science).gpa}</td>
      </tr>
      <tr>
        <td>105</td>
        <td>SOCIAL SCIENCE</td>
        <td>${getGradeAndGPA(searchData.results.social).grade}</td>
        <td>${getGradeAndGPA(searchData.results.social).gpa}</td>
      </tr>
      <tr>
        <td>106</td>
        <td>RELIGION</td>
        <td>${getGradeAndGPA(searchData.results.religion).grade}</td>
        <td>${getGradeAndGPA(searchData.results.religion).gpa}</td>
      </tr>
    </tbody>
  </table>
  <a href="#" onclick="goToSearchPage()">Search Again</a>
</div>
</div>

`;

const goToSearchPage = () => {
  localStorage.removeItem("searchData");
  window.location.href = "index.html";
};
