export default function Body(){
let dom=document.getElementById('root');
    let body=document.createElement('div');
    body.innerHTML='body';
    dom.append(body);
}