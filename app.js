function fn_a() {
    console("fn_a");
}

function fn_b() {
    console("fn_b");
}

function fn_c() {
    //fn_c 리모델링
    console("리모델링 fn_c");
}


function fn_d() {
    console("fn_c");
}

console.log('hello');

fn_a();

fn_b();

fn_c();

fn_d();