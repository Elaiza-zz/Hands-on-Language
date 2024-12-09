<script></script>

<template>
  <div class="container">
    <!--! 1 row -->
    <div class="row justify-content-center">
      <!--! 1 col -->
      <div class="col">
        <!-- card -->
        <div class="card border-thin px-5 py-5">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <hr class="my-5" />
          <p class="text-center">
            Already have an account?
            <router-link to="/login" class="text-primary">Log in</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
