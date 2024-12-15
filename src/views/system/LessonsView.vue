<script setup>

</script>

<style>
        .btn-custom {
            background-color: #fff0d1;
            color: black;
            font-family: monospace;
        }
        .btn-custom:hover {
            background-color: #e5d3b8;
        }
        .btn-custom-secondary {
            background-color: #ffdbb5;
            color: black;
            font-family: monospace;
        }
        .btn-custom-secondary:hover {
            background-color: #e6c2a1;
        }
    </style>

<template>



    <div class="container d-flex flex-column min-vh-100 align-items-center">
        <header class="w-100 bg-dark py-3 d-flex justify-content-between align-items-center px-3" style="background-color: #795757;">
            <div class="d-flex align-items-center gap-2">
                <img src="data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23000'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='16' font-family='Arial'%3EASL%3C/text%3E%3C/svg%3E" alt="ASL Logo" class="rounded-circle" style="width: 32px; height: 32px;">
                <span class="text-white" style="font-family: monospace;">BASIC</span>
            </div>
            <button class="btn btn-link text-white p-0" aria-label="Menu">
                <span class="material-icons">menu</span>
            </button>
        </header>

        <main class="w-100 p-4 flex-grow-1 d-flex flex-column align-items-center">
            <h1 class="text-center mb-4" style="font-family: monospace; font-size: 2rem;">Lessons</h1>

            
            <div class="w-100 d-flex flex-column gap-3">
                  Alphabet Button  
                <button class="btn btn-custom d-flex justify-content-center align-items-center gap-2 p-3 w-100">
                    <span>Alphabet</span>
                    <span class="material-icons">arrow_forward</span>
                </button>
 
                  Numbers Button  
                <button class="btn btn-custom-secondary d-flex justify-content-center align-items-center gap-2 p-3 w-100">
                    <span>Numbers</span>
                    <span class="material-icons">arrow_forward</span>
                </button>
            </div>
        </main>
    
  </div>
</template>
```
