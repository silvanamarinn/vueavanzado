<template>
  <div >
     <b-container class="">
     
    <div>
      <h1>Editando el curso: Javascript Avanzado</h1>
      <section>
        <div class="m-3">
          <label>Nombre</label>
            <input placeholder="JavaScript Avanzado" />
        </div>
         <!---------------------------------------------------------->
         <div class="m-3"> 
          <label>Url imagen del curso</label>
            <input
            placeholder="https://bootstrap-vue.org"
          />
        </div>
       <!---------------------------------------------------------->
         <div class="m-3">
          <label>Cupos del Curso</label>
          <input placeholder="20" />
        </div>
         <!---------------------------------------------------------->
         <div class="m-3">
          <label>Inscritos en el curso</label>
           <input placeholder="10" />
        </div>
         <!---------------------------------------------------------->
        <div class="m-3">
          <label>Duración curso</label>
           <input placeholder="2 meses" />
        </div>
         <!---------------------------------------------------------->
        <div class="m-3">
          <label>Costo de curso</label>
           <input placeholder="30000" />
        </div>
         <!---------------------------------------------------------->
         <div class="m-3">
          <label>Código del curso</label>
            <input placeholder="C00202" />
        </div>
         <!---------------------------------------------------------->
         <div class="m-3">
          <label>Descripción del curso</label>
              <b-form-textarea id="textarea-rows" placeholder="Curso con las nuevas actualizaciones de JavaScript Avanzado" rows="8">
              </b-form-textarea>
        </div>
         <!---------------------------------------------------------->
           <div class="m-3">
          <label>Fecha del Regristro</label>
            <input  placeholder="06-03-2021" />
        </div>
         <!---------------------------------------------------------->
        <div class="m-3">
           
          <h4>Terminado:No</h4>
        </div>
         
      </section>
    
     

    <b-button class="m-3" variant="success">Iniciar</b-button>
     <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
     <b-button class="m-3" variant="warning">Limpiar Validación</b-button>
    </div>
    </b-container>
  </div>
</template>

<style scoped>
input{
  border:none; 
  }
section {
  text-align: left;
}
</style>