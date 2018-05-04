function fn_a() {
    console("fn_a");
}

function fn_b() {
    console("fn_b");
}

function fn_c() {
    //fn_c 리모델링
    console("fn_c");
    console("리모델링 fn_c");
    console("리모델링 추가 fn_c");
    console("리모델링 추가2 fn_c");    
}


function fn_d() {
    console.log("fn_d");
}

function fn_e() {
    console.log("fn_e");
}

fn_a();

fn_b();

fn_c();

fn_d();