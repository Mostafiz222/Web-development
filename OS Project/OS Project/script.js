let f,d;
let Arr = [];
let Brs= [];
function Gen(){
    n=parseInt(document.getElementById('numberInput').value);
    f=n;
    d=n;
    const outputd=document.getElementById('output');
    outputd.innerHtml=' ';
     const k=document.createElement('span');
     k.textContent=n;
    //  outputd.appendChild(k);
}
function Arrive(){
    n=parseInt(document.getElementById('arrive').value);
    Arr.push(n);
    f=f-1;
    const outputd=document.getElementById('output');
    outputd.innerHtml=' ';
    arrive.value="";
    //  const k=document.createElement('span');
    //  k.textContent=n;
    //  outputd.appendChild(k);
     if(f==0){
        for(let i=0;i<d;i++){
            const a=document.createElement('span');
            a.textContent=Arr[i];
            outputd.appendChild(a);
        }
        f=d;
     }
}
function Burst(){
    n=parseInt(document.getElementById('burst').value);
    Brs.push(n);
    const outputd=document.getElementById('outputt');
    outputd.innerHtml=' ';
    burst.value="";
    f=f-1;
    //  const k=document.createElement('span');
    //  k.textContent=n;
    //  outputd.appendChild(k);
     if(f==0){
        for(let i=0;i<d;i++){
            const a=document.createElement('span');
            a.textContent=Brs[i];
            outputd.appendChild(a);
        }
     }

}
let ganttChart = [];
let completionTimes=[];
let turnAroundTimes=[];
let responseTimes=[];

function fcfs() {
    const outputd = document.getElementById('answer');
    //outputd.innerHTML = ' ';
    const processes = Arr.map((arrivalTime, index) => ({
        processId: index + 1,
        arrivalTime,
        burstTime: Brs[index]
    }));

    // Sort processes by arrival time
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    let time = 0;
    processes.forEach((process) => {
        const startTime = Math.max(time, process.arrivalTime);
        const endTime = startTime + process.burstTime;
        ganttChart.push(process.processId); // Only store process ID
        completionTimes.push(endTime); // Completion time is the end time
        turnAroundTimes.push(endTime - process.arrivalTime); // Turnaround time = Completion time - Arrival time
        responseTimes.push(startTime - process.arrivalTime);
        time = endTime;
    });
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = ganttChart[i];
        outputd.appendChild(span);
    }
    const a = document.getElementById('com');
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = completionTimes[i];
        a.appendChild(span);
    }
    const b = document.getElementById('turn');
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = turnAroundTimes[i];
        b.appendChild(span);
    }
    const c = document.getElementById('res');
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = responseTimes[i];
        c.appendChild(span);
    }
}
function sjp() {
    const outputd = document.getElementById('answer');
    const processes = Arr.map((arrivalTime, index) => ({
        processId: index + 1,
        arrivalTime,
        burstTime: Brs[index]
    }));

    // Sort processes by arrival time, then by burst time for those with the same arrival time
    processes.sort((a, b) => {
        if (a.arrivalTime === b.arrivalTime) {
            return a.burstTime - b.burstTime;
        }
        return a.arrivalTime - b.arrivalTime;
    });

    let time = 0;
    const remainingProcesses = [...processes];

    while (remainingProcesses.length > 0) {
        const availableProcesses = remainingProcesses.filter(p => p.arrivalTime <= time);
        if (availableProcesses.length > 0) {
            // Pick the process with the shortest burst time
            availableProcesses.sort((a, b) => a.burstTime - b.burstTime);
            const process = availableProcesses[0];

            const startTime = Math.max(time, process.arrivalTime);
            const endTime = startTime + process.burstTime;
            ganttChart.push(process.processId); // Only store process ID
            completionTimes.push(endTime); // Completion time is the end time
            turnAroundTimes.push(endTime - process.arrivalTime); // Turnaround time = Completion time - Arrival time
            responseTimes.push(startTime - process.arrivalTime);
            time = endTime;

            // Remove the process from the remaining list
            const index = remainingProcesses.findIndex(p => p.processId === process.processId);
            remainingProcesses.splice(index, 1);
        } else {
            // If no process is available, increment time
            time++;
        }
    }

    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = ganttChart[i];
        outputd.appendChild(span);
    }

    const a = document.getElementById('com');
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = completionTimes[i];
        a.appendChild(span);
    }

    const b = document.getElementById('turn');
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = turnAroundTimes[i];
        b.appendChild(span);
    }

    const c = document.getElementById('res');
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = responseTimes[i];
        c.appendChild(span);
    }
}
function srtf() {
    const outputd = document.getElementById('answer');
    const processes = Arr.map((arrivalTime, index) => ({
        processId: index + 1,
        arrivalTime,
        burstTime: Brs[index],
        remainingTime: Brs[index]
    }));

    // Sort processes by arrival time
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    let time = 0;
    let completed = 0;
    const n = processes.length;
    let currentProcess = null;

    while (completed < n) {
        // Get processes that have arrived
        const availableProcesses = processes.filter(p => p.arrivalTime <= time && p.remainingTime > 0);

        if (availableProcesses.length > 0) {
            // Select the process with the shortest remaining time
            availableProcesses.sort((a, b) => a.remainingTime - b.remainingTime);
            currentProcess = availableProcesses[0];

            // Process executes for 1 time unit
            currentProcess.remainingTime--;
            ganttChart.push(currentProcess.processId); // Store process ID

            if (currentProcess.remainingTime === 0) {
                completed++;
                const endTime = time + 1;
                completionTimes[currentProcess.processId - 1] = endTime; // Completion time
                turnAroundTimes[currentProcess.processId - 1] = endTime - currentProcess.arrivalTime; // Turnaround time
                responseTimes[currentProcess.processId - 1] = (responseTimes[currentProcess.processId - 1] !== undefined) 
                    ? responseTimes[currentProcess.processId - 1] 
                    : (time - currentProcess.arrivalTime); // Response time
            }
        }

        // Increment time
        time++;
    }

    // Display Gantt Chart
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = ganttChart[i];
        outputd.appendChild(span);
    }

    // Display Completion Times
    const a = document.getElementById('com');
    for (let i = 0; i < processes.length; i++) {
        const span = document.createElement('span');
        span.textContent = completionTimes[i] || '-';
        a.appendChild(span);
    }

    // Display Turnaround Times
    const b = document.getElementById('turn');
    for (let i = 0; i < processes.length; i++) {
        const span = document.createElement('span');
        span.textContent = turnAroundTimes[i] || '-';
        b.appendChild(span);
    }

    // Display Response Times
    const c = document.getElementById('res');
    for (let i = 0; i < processes.length; i++) {
        const span = document.createElement('span');
        span.textContent = responseTimes[i] || '-';
        c.appendChild(span);
    }
}
function roundRobin() {
    let timeQuantum=2;
    const outputd = document.getElementById('answer');
    const processes = Arr.map((arrivalTime, index) => ({
        processId: index + 1,
        arrivalTime,
        burstTime: Brs[index],
        remainingTime: Brs[index]
    }));

    let time = 0;
    const queue = [];
    const n = processes.length;
    let completed = 0;

    while (completed < n) {
        // Add newly arrived processes to the queue
        processes.forEach((process) => {
            if (process.arrivalTime <= time && process.remainingTime > 0 && !queue.includes(process)) {
                queue.push(process);
            }
        });

        if (queue.length > 0) {
            const currentProcess = queue.shift();

            // Execute the process for the time quantum or remaining time, whichever is smaller
            const executeTime = Math.min(timeQuantum, currentProcess.remainingTime);
            currentProcess.remainingTime -= executeTime;
            time += executeTime;

            for (let i = 0; i < executeTime; i++) {
                ganttChart.push(currentProcess.processId); // Store process ID in Gantt chart
            }

            if (currentProcess.remainingTime === 0) {
                completed++;
                const endTime = time;
                completionTimes[currentProcess.processId - 1] = endTime; // Completion time
                turnAroundTimes[currentProcess.processId - 1] = endTime - currentProcess.arrivalTime; // Turnaround time
                responseTimes[currentProcess.processId - 1] = (responseTimes[currentProcess.processId - 1] !== undefined) 
                    ? responseTimes[currentProcess.processId - 1] 
                    : (time - executeTime - currentProcess.arrivalTime); // Response time
            } else {
                // If process is not finished, push it back into the queue
                queue.push(currentProcess);
            }
        } else {
            // If no process is available, increment time
            time++;
        }
    }

    // Display Gantt Chart
    for (let i = 0; i < ganttChart.length; i++) {
        const span = document.createElement('span');
        span.textContent = ganttChart[i];
        outputd.appendChild(span);
    }

    // Display Completion Times
    const a = document.getElementById('com');
    for (let i = 0; i < processes.length; i++) {
        const span = document.createElement('span');
        span.textContent = completionTimes[i] || '-';
        a.appendChild(span);
    }

    // Display Turnaround Times
    const b = document.getElementById('turn');
    for (let i = 0; i < processes.length; i++) {
        const span = document.createElement('span');
        span.textContent = turnAroundTimes[i] || '-';
        b.appendChild(span);
    }

    // Display Response Times
    const c = document.getElementById('res');
    for (let i = 0; i < processes.length; i++) {
        const span = document.createElement('span');
        span.textContent = responseTimes[i] || '-';
        c.appendChild(span);
    }
}