---
title: "Exercise R48: Kernels of Five Evaluation Maps"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ring-homomorphisms
  - ideals
  - polynomial-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.3, printed pp. 354–355, PDF pp. 366–367"
created: 2026-08-27
---

# Exercise R48: Kernels of Five Evaluation Maps

## Problem Statement

> [!question] Exercise 3.3
> Find generators for the kernels of the following maps:
>
> **(a)** $\mathbb R[x,y]\to\mathbb R$, $f(x,y)\mapsto f(0,0)$;
>
> **(b)** $\mathbb R[x]\to\mathbb C$, $f(x)\mapsto f(2+i)$;
>
> **(c)** $\mathbb Z[x]\to\mathbb R$, $f(x)\mapsto f(1+\sqrt2)$;
>
> **(d)** $\mathbb Z[x]\to\mathbb C$, $x\mapsto\sqrt2+\sqrt3$;
>
> **(e)** $\mathbb C[x,y,z]\to\mathbb C[t]$, $x\mapsto t$, $y\mapsto t^2$, $z\mapsto t^3$.

## Hints

> [!hint]- Hint 1
> Use division by monic polynomials and the minimal polynomial of the evaluation point.

> [!hint]- Hint 2
> In (e), reduce every polynomial modulo $y-x^2$ and $z-x^3$.

## Solution

> [!success]- Solution
> The kernels are
>
> $$
> \begin{aligned}
> \text{(a)}&\quad(x,y),\\
> \text{(b)}&\quad(x^2-4x+5),\\
> \text{(c)}&\quad(x^2-2x-1),\\
> \text{(d)}&\quad(x^4-10x^2+1),\\
> \text{(e)}&\quad(y-x^2,z-x^3).
> \end{aligned}
> $$
>
> In (a), a polynomial has zero constant term exactly when every monomial is divisible by $x$ or $y$. In (b)–(d), the displayed monic polynomial is the minimal polynomial over the coefficient field (and is primitive in the integral cases); division by it leaves a remainder too small to vanish at the indicated algebraic number unless the remainder is zero. In (e), reduction by the two displayed relations leaves a polynomial in $x$ alone, and its image is that same polynomial in $t$; injectivity of $\mathbb C[x]\to\mathbb C[t]$ forces the remainder to vanish.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Source status:** The multipart statement is verified on [S1, Ch. 11, §3, Ex. 3.3, printed pp. 354–355, PDF pp. 366–367]. The kernel calculations are independent.

