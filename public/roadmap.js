//1.



document.getElementById('add-step').addEventListener('click', function() {
    var newStep = document.createElement('div');
    newStep.className = 'step';
    newStep.innerHTML = `
        <h3>Step Title</h3>
        <ul>
            <li>Source: <input type="text" placeholder="Enter source URL"></li>
            <!-- Add more source inputs as needed -->
        </ul>
    `;
    document.getElementById('steps-container').appendChild(newStep);
});

document.getElementById('add-content').addEventListener('click', function() {
    var newContent = document.createElement('div');
    newContent.className = 'content';
    newContent.innerHTML = `
        <h3>Content Title</h3>
        <p>Content Description</p>
        <!-- Add more content elements as needed -->
    `;
    document.getElementById('other-content').appendChild(newContent);
});

document.getElementById('add-information').addEventListener('click', function() {
    var newStep = document.createElement('div');
    newStep.id = 'information';
    newStep.innerHTML = `
    
        <h3 id="info-title">Information Title</h3><input type="text" placeholder="enter the title">
        <p id="info-description"><h3>description</h3><div class="descriptionbox"><input type="text" placeholder="enter description"  style="width: 300px; height: 300px;"></div></p>
   
    `;
    document.getElementById('info-content').appendChild(newStep);
});

document.getElementById('add-posts').addEventListener('click', function() {
    console.log("done")
    var newStep = document.createElement('div');
    newStep.id = 'job-posts';
    newStep.innerHTML = `

      
        <ul id="job-list">
            <li>Job Title: <input type="text" placeholder="enter title"></li>
         <li>Job role: <input type="text" placeholder="enter title"></li>
         <li>Average Salary:<input type="text" placeholder="enter title"> </li>
        </ul>
    `
        ;
   
    
        document.getElementById('post-content').appendChild(newStep);
});

document.getElementById('submit').addEventListener('click',function(){
    var title = document.getElementById("i-title").value;
    var content = document.getElementById("i-description").value;
    localStorage.setItem("lastname", title);
    var store= localStorage.getItem("lastname");
    // console.log(store);
    // console.log(content);
    
    // var html= document.getElementsByTagName("body")[0].innerHTML;
    // localStorage.setItem("html", html);
    // var store= localStorage.getItem("html");
    //  console.log(store);

     // Variables to store information from each section
let roadmapTitle;
let roadmapImage;
let information = [];
let jobPosts = [];
let stepByStepGuide = [];
let otherContent = [];

// Get roadmap title
roadmapTitle = document.getElementById('roadmap-title').querySelector('input').value;

// Get roadmap image
roadmapImage = document.getElementById('image-input').value;

// Get information section
document.querySelectorAll('#information .info-content').forEach((info) => {
    let title = info.querySelector('#i-title').value;
    let description = info.querySelector('#i-description').value;
    information.push({ title, description });
});

// Get job posts section
document.querySelectorAll('#job-posts .post-content ul').forEach((post) => {
    let title = post.querySelector('#j-title').value;
    let role = post.querySelector('#j-role').value;
    let salary = post.querySelector('#j-salary').value;
    jobPosts.push({ title, role, salary });
});

// Get step-by-step guide section
document.querySelectorAll('#step-by-step .steps-container .step').forEach((step) => {
    let title = step.querySelector('h3').textContent;
    let sources = [];
    step.querySelectorAll('input[type="text"]').forEach((source) => {
        sources.push(source.value);
    });
    stepByStepGuide.push({ title, sources });
});

// Get other content section
document.querySelectorAll('#other .other-content .content').forEach((content) => {
    let title = content.querySelector('h3').textContent;
    let description = content.querySelector('p').textContent;
    otherContent.push({ title, description });
});

// Now you have all the information stored in variables according to the sections
// You can use these variables to further process or display the information
console.log('Roadmap Title:', roadmapTitle);
console.log('Roadmap Image:', roadmapImage);
console.log('Information:', information);
console.log('Job Posts:', jobPosts);
console.log('Step-by-Step Guide:', stepByStepGuide);
console.log('Other Content:', otherContent);



});




