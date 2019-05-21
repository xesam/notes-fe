let m = {
    k: 'k_1',
    v: [
        {
            k: 'k_1_1',
            v: 'v_1_1'
        },
        {
            k: 'k_1_2',
            v: 'v_1_2'
        },
        {
            k: 'k_1_3',
            v: [
                {
                    k: 'k_2_1',
                    v: 'v_2_1'
                },
                {
                    k: 'k_2_2',
                    v: 'v_2_2'
                },
                {
                    k: 'k_2_3',
                    v: 'v_2_3'
                }
            ]
        }
    ]
};

function* gen(d) {
    if (typeof d.v === 'string') {
        yield d.v;
    } else {
        for (let s of d.v) {
            yield* gen(s);
        }
    }

}

let g = gen(m);
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
