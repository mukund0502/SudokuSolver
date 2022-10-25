var r1 = document.getElementsByClassName("r1");
var r2 = document.getElementsByClassName("r2");
var r3 = document.getElementsByClassName("r3");
var r4 = document.getElementsByClassName("r4");
var r5 = document.getElementsByClassName("r5");
var r6 = document.getElementsByClassName("r6");
var r7 = document.getElementsByClassName("r7");
var r8 = document.getElementsByClassName("r8");
var r9 = document.getElementsByClassName("r9");

var messege = document.getElementsByClassName("messege");

var reset = document.getElementById("reset")


var t = [r1,r2,r3,r4,r5,r6,r7,r8,r9];

var button = document.getElementById("button")
button.addEventListener("click", ()=>{
    var arr = [];
    for (let i = 0; i < 9; i++) {
        var temp  = [];
        var k = t[i];
        for (let j = 0; j < 9; j++) {
            // console.log(k[j]);
            if(k[j].value==""){
                temp.push(0);
            }else{
                temp.push(k[j].value);
            }
        }
        arr.push(temp);
        
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
           console.log(arr[i][j]);
        }
        
    }

    function check(board, c, i, j) {
        ret = true;
        for (let k = 0; k < board.length; k++) {
            if(board[i][k]==c && k!=j && c!=0){
                ret = false;
            }
        }
        for (let k = 0; k < board.length; k++) {
            if(board[k][j]==c && k!=i && c!= 0){
                ret = false;
            }
        }
        
        var ii = i;
        var jj = j;
        i = Math.floor(i/3);
        j = Math.floor(j/3);
        i*=3;
        j*=3;
        for (let k = 0; k < 3; k++) {
            for (let l = 0; l < 3; l++) {
                if((board[k+i][l+j]==c)&&(k+i!=ii)&&(l+j!=jj)&&(c!=0)){
                    ret = false;
                }
            }
        }
        return ret;
    }

    function isValidSudoku(board) {
        var answer = true;
        for(var i = 0; i<board.length; i++){
            for(var j=0; j<board[i].length; j++){
                
                if(check(board,board[i][j],i,j)){
                    if(board[i][j]!='' && (board[i][j]>9 || board[i][j]<1)){
                        answer = false;
                    }
                }else{
                    answer = false;
                }
            }
        }
        return answer;
    }

    function solution(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if(board[i][j] == 0){
                    for(let k = 1; k<=9; k++){
                        if(check(board, k, i,j) ){
                            board[i][j] = k;
                            if (solution(board))
                            {
                                return true;
                            }
                            else
                            {
                                board[i][j] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function solveSudoku(board) {
        if(isValidSudoku(board)==false){
            messege[0].innerHTML = "Invalid sudoku!!! Try again with valid data.";  
        }
        else{
            messege[0].innerHTML = "";
            solution(board);
            for (let index2 = 0; index2 < t.length; index2++) {
                var rr = t[index2];
                for (let index = 0; index < t[index2].length; index++) {
                    rr[index].value = arr[index2][index];
                }
            }
            
        }
        
    }

    solveSudoku(arr);
})

reset.addEventListener("click", ()=>{
    messege[0].innerHTML = "";  
    for (let index2 = 0; index2 < t.length; index2++) {
        var rr = t[index2];
        for (let index = 0; index < t[index2].length; index++) {
            rr[index].value = '';
        }
    }
})

