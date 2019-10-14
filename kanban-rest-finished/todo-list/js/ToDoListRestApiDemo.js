var tareaOut = document.getElementById("tareaResponse");

const back4appAppId = "G0gnBMRBdJnVlS2THUjYQ0NRMQRz14fMqc431A1b";
const back4appApiKey = "QN0rH8P55jTSHTK5WnPtNCKALTUqinhD51ai2cGL";

const url="https://parseapi.back4app.com/classes/Tasks/";
const responseType = 'json';

var tasksList = [];

function addTask(){
    tareaOut.value="addTask started ...";

    var taskName = document.getElementById("inNewTask").value.trim();

    if(taskName==""){
        tareaOut.value +="\nSorry, nothing to send.\nDone.";
        return;
    }

    var createdTask = {task:taskName, isDone:false};
    const data = JSON.stringify(createdTask);
    
    

    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    setupHttpRequest(request);
    request.onload = function() {
        var status = request.status;
        if (status === 201) {
            writeSuccResponse && writeSuccResponse(request.response);
            createdTask.taskId = this.response.objectId;
            tasksList.push(createdTask);
        } else {
            writeErrMsg && writeErrMsg(status, request.response);
        }
    };
    request.send(data);    
}

function editTask(){


    tareaOut.value="editTask started ...";

    var taskName = document.getElementById("inNewTaskName").value.trim();

    if(taskName==""){
        tareaOut.value +="\nSorry, no new task name set.\nDone.";
        return;
    }   

    var taskId = document.getElementById("inTaskIdEdt").value.trim();

    if(taskId==""){
        tareaOut.value +="\nSorry, no task id specified.\nDone.";
        return;
    }

    const data = JSON.stringify({task:taskName});

    var request = new XMLHttpRequest();
    request.open('PUT', url+taskId, true);
    setupHttpRequest(request);
    request.onload = function() {
        var status = request.status;
        if (status === 200) {
            writeSuccResponse && writeSuccResponse(request.response);
        } else {
            writeErrMsg && writeErrMsg(status, request.response);
        }
    };
    request.send(data);  


}

function deleteTask(){

    tareaOut.value="deleteTask started ...";

    var taskId = document.getElementById("inTaskIdRem").value.trim();

    if(taskId==""){
        tareaOut.value +="\nSorry, nothing to delete.\nDone.";
        return;
    }

    var request = new XMLHttpRequest();
    request.open('DELETE', url+taskId, true);
    setupHttpRequest(request);
    request.onload = function() {
        var status = request.status;
        if (status === 200) {
            writeSuccResponse && writeSuccResponse(request.response);
        } else {
            writeErrMsg && writeErrMsg(status, request.response);
        }
    };
    request.send();

}

function getTasks(){
    tareaOut.value="getTasks started ...";
    
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    setupHttpRequest(request);
    request.onload = function() {
        var status = request.status;
        if (status === 200) {
            writeSuccResponse && writeSuccResponse(request.response);
            const taskListElm = document.getElementById('task-list');
            taskListElm.innerHTML = '';
            tasksList = [];
            
            request.response.results.array.forEach(function(task) {
                taskListElm.innerHTML += `<li>${task.taskName}</li>`
                tasksList.push(task);
            });
        } else {
            writeErrMsg && writeErrMsg(status, request.response);
        }
    };
    request.send();

    
}



function writeSuccResponse(response){
    console.log(response);
    tareaOut.value="SUCCESS. \n\nResponse:\n"+JSON.stringify(response);

}

function writeErrMsg(status, response){
    tareaOut.value="ERROR \nStatus:"+status+"\nResponse: "+response;

}

function setupHttpRequest(request) {
    request.responseType = responseType;
    request.setRequestHeader("X-Parse-Application-Id",back4appAppId);
    request.setRequestHeader("X-Parse-REST-API-Key",back4appApiKey);
}