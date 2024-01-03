
function Todoitems1(){
   let todoName ='Go to school';
   let todoDate ='21/09/2023';
  return (
    <>
      <div class="container text-center">
      <div class="row">
          <div class="col-6">{todoName}</div>
          <div class="col-2">{ todoDate}</div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitems1;