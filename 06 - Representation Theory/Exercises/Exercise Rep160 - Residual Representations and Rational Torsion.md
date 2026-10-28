---
title: "Exercise Rep160: Residual Representations and Rational Torsion"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.4, Exercise 9.4.4, printed p. 394, PDF p. 406"
source_refs:
  - "S7/ch-9/sec-4/ex-4"
created: 2026-10-28
---

# Exercise Rep160: Residual Representations and Rational Torsion

## Problem Statement

> [!question] Original Exercise 9.4.4
> This exercise gives an example of a mod $\ell$ representation.
>
> (a) For an elliptic curve $E/\mathbb Q$ of conductor $N$, define
> $$
> \overline\rho_{E,\ell}:G_{\mathbb Q}\to\operatorname{Gal}(\mathbb Q(E[\ell])/\mathbb Q)\to\mathrm{GL}_2(\mathbb F_\ell).
> $$
> Explain why, for a prime ideal over $p\nmid\ell N$, its Frobenius has characteristic equation $x^2-a_p(E)x+p=0$ over $\mathbb F_\ell$.
>
> (b) Consider $E:y^2=x^3-d$ with $d\in\mathbb Z$ cubefree and $\ell=2$. Show $\mathbb Q(E[2])$ is the non-Abelian Galois field $F=\mathbb Q(d^{1/3},\mu_3)$ from Section 9.1. Thus (9.6) followed by reduction modulo $2$ gives an isomorphism to $\mathrm{GL}_2(\mathbb F_2)$. Use it to describe $a_p(E)\pmod2$.
>
> (c) Suppose $E[\ell](\mathbb Q)\ne\{0\}$. Show that for $p\nmid\ell N$ the characteristic equation is $(x-1)(x-p)=0$. Explain why $E[\ell](\mathbb Q)$ cannot be all of $E[\ell]$ for $\ell>2$, comparing Section 7.6. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Reduce the integral Tate representation modulo $\ell$.

> [!hint]- Hint 2
> Nonzero two-torsion points have $y=0$. For rational torsion, use a fixed basis vector and the Weil-pairing determinant.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** The action on $E[\ell]$ is the reduction of the action on the integral Tate module. Its trace and determinant are the reductions of $a_p(E)$ and $p$ by Theorem 9.4.1. Reducing the characteristic polynomial gives exactly the assertion; reduction preserves the characteristic polynomial because its coefficients are polynomials in the matrix entries.
>
> **Source issue in (b).** Cubefree permits $d=1$ and $d=-1$. Then the cubic has a rational root and its splitting field is $\mathbb Q(\mu_3)$, which is abelian, of degree two. The asserted six-element Galois group therefore requires that $d$ not be a rational cube (and $d\ne0$, already required for an elliptic curve). Preserve the printed scope and impose this missing condition for its non-Abelian conclusion.
>
> **(b), with that condition.** The three nonzero two-torsion points are $(d^{1/3}\mu_3^i,0)$, $i=0,1,2$, so their coordinate field is the splitting field of $X^3-d$. An irreducible cubic with discriminant $-27d^2$, a nonsquare, has Galois group $S_3$. The matrices in (9.6) reduce to a matrix of order three and one of order two conjugating it to its inverse. Their six products remain distinct, so they give an isomorphism to $\mathrm{GL}_2(\mathbb F_2)$, whose order is $(4-1)(4-2)=6$. Trace is one precisely on the order-three elements, and zero on the identity and the three involutions. Hence for good odd $p$,
> $$
> a_p(E)\equiv\begin{cases}
> 1\pmod2,&p\equiv1\pmod3\text{ and }d\text{ is not a cube mod }p,\\
> 0\pmod2,&\text{otherwise}.
> \end{cases}
> $$
> At $d=\pm1$ every good-prime trace is even because the image has order at most two, consistent with its separate splitting-field description.
>
> **(c).** Take a nonzero rational torsion point as a basis vector. Every Galois matrix has eigenvalue one. Its other eigenvalue is its determinant, which is the mod-$\ell$ cyclotomic character by the Weil pairing; at good $p\ne\ell$ it is $p$. This proves the polynomial formula. If all torsion were rational then the action would be trivial, forcing the mod-$\ell$ cyclotomic character to be trivial. But $\operatorname{Gal}(\mathbb Q(\mu_\ell)/\mathbb Q)\cong\mathbb F_\ell^*$ is nontrivial for $\ell>2$. Equivalently the nondegenerate Weil pairing on a rational torsion basis would make a primitive $\ell$th root of unity rational. Both yield the contradiction without any unproved assertion about primes in residue classes.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Source issue:** Part (b) omits the exclusion $d=\pm1$; the literal non-Abelian conclusion is false in those cubefree cases. The corrected case and the exceptions are both treated.
- **Imported inputs:** Theorem 9.4.1, the Weil pairing, and the cubic discriminant criterion for the Galois group.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
