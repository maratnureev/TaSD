const epsilon = 0.00000000001

const triangleType = {
    equilateral: 'equilateral',
    error: 'error',
    isosceles: 'isosceles',
    common: 'common',
    notTriangle: 'not_a_triangle'    
}

const a = process.argv[2]
const b = process.argv[3]
const c = process.argv[4]

function defineTriangle(a, b, c) {
    if (!isNumber(a) || !isNumber(b) || !isNumber(c) || a < epsilon || b < epsilon || c < epsilon) {
        return triangleType.error
    }
    a = Number(a)
    b = Number(b)
    c = Number(c)
    if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER || c > Number.MAX_SAFE_INTEGER) {
        return triangleType.error
    }
    if (a <= 0 || b <= 0 || c <= 0) {
        return triangleType.error
    }
    if (equal(a, b) && equal(a, c)) {
        return triangleType.equilateral
    }

    if (greaterThen(a + b, c) && greaterThen(a + c, b) && greaterThen(b + c, a)) {
        if (equal(a, b) || equal(a, c) || equal(b, c)) {
            return triangleType.isosceles
        }
        return triangleType.common
    }
    
    return triangleType.notTriangle
}

function greaterThen(A, B) {
    return (A - B > epsilon) && (Math.abs(A - B) > epsilon);
};

function equal(A, B) {
    return Math.abs(A - B) < epsilon;
};

function isNumber(a) {
    return typeof(a) == 'number'
}

defineTriangle(a, b, c)

module.exports = {
    defineTriangle,
    triangleType,
}