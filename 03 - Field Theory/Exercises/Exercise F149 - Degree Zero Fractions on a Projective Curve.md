---
title: "Exercise F149: Degree Zero Fractions on a Projective Curve"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.2, printed p. 350, PDF p. 363"
source_refs:
  - "S7/ch-8/sec-5/ex-2"
created: 2026-10-28
---

# Exercise F149: Degree Zero Fractions on a Projective Curve

## Problem Statement

> [!question] Original Exercise 8.5.2
> (a) In the context of Lemma 8.5.2, show that the elements $(f+I)/(g+I)$ of the fraction field of $k[x]/I$, where $f,g$ are homogeneous of the same degree, form a subfield $K$.
>
> (b) Assume the dehomogenized ideal $I_{(i)}$ is proper, so $x_i\notin I$. Define $k[x_{(i)}]/I_{(i)}\to K$ by
> $$
> f\longmapsto\frac{f_{\rm hom}+I}{x_i^d+I},\qquad d=\deg f.
> $$
> Show this map is well defined and injective and extends to an isomorphism of its fraction field with $K$.
>
> (c) Show $K$ has transcendence degree $1$ and therefore so does the fraction field of every such affine piece. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use common homogeneous degrees for sums and products.

> [!hint]- Hint 2
> A denominator power of $x_i$ turns homogeneous coordinates into affine ratios.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $A=k[x_0,\ldots,x_n]/I$ be the graded coordinate domain of the projective curve, with homogeneous prime ideal $I$. Fractions always have nonzero denominator.
>
> **(a)** Constants belong to $K$. If $f/g$ has both degrees $d$ and $h/j$ has both degrees $e$, then
> $$
> \frac fg+\frac hj=\frac{fj+hg}{gj},\qquad
> \frac fg\frac hj=\frac{fh}{gj}
> $$
> have numerator and denominator of equal degree $d+e$. A zero numerator is allowed. Additive inverses preserve degree, and the inverse of a nonzero $f/g$ is $g/f$. Thus $K$ is a subfield.
>
> **(b)** The rule is simply substitution of $x_j/x_i$ for the affine variables. Choosing a larger homogenizing degree multiplies numerator and denominator by the same power of $x_i$, so it does not change the fraction. If an affine polynomial lies in $I_{(i)}$, some power of $x_i$ times its homogenization lies in $I$; conversely this condition dehomogenizes to membership in $I_{(i)}$. Because $I$ is prime and $x_i\notin I$, multiplying by a power of $x_i$ does not create or remove ideal membership. This proves well-definedness and that the kernel is exactly $I_{(i)}$.
>
> The injective map extends to the affine fraction field. Any homogeneous equal-degree fraction $f/g$ can be divided in numerator and denominator by the same power $x_i^d$ and then dehomogenized. It is therefore in the image of that fraction field, proving surjectivity.
>
> **(c)** In Lemma 8.5.2 the original nonempty chart, denoted chart $0$, already has a curve function field of transcendence degree $1$. Part (b) with $i=0$ identifies it with $K$. Applying (b) to any other nonempty chart gives the same field, so its transcendence degree is also $1$. This uses the given curve hypothesis, rather than asserting that every homogeneous prime defines a curve.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 350 / PDF p. 363. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
