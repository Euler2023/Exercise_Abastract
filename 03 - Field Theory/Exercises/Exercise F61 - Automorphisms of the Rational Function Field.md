---
title: "Exercise F61: Automorphisms of the Rational Function Field"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - rational-functions
  - automorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Miscellaneous Ex. M.6, printed p. 476, PDF p. 488"
created: 2026-08-28
---

# Exercise F61: Automorphisms of the Rational Function Field

## Problem Statement

> [!question] Miscellaneous Exercise *M.6
> **(a)** Prove that a rational function $f(t)$ that generates the field $\mathbb C(t)$ of all rational functions defines a bijective map $T\to T'$.
>
> **(b)** Prove a rational function $f(x)$ generates the field of rational functions $\mathbb C(x)$ if and only if it is of the form $(ax+b)/(cx+d)$, with $ad-bc\ne0$.
>
> **(c)** Identify the group of automorphisms of $\mathbb C(x)$ that are the identity on $\mathbb C$.

## Hints

> [!hint]- Hint 1
> Relate the degree of the rational map defined by $f$ to the extension degree $[\mathbb C(t):\mathbb C(f)]$.

## Solution

> [!success]- Solution
> **(a)** The rational function $f$ defines a map between the projective lines $T\cong\mathbb P^1_t$ and $T'\cong\mathbb P^1_f$. Its degree equals the function-field degree
>
> $$
> \deg(f)=[\mathbb C(t):\mathbb C(f)].
> $$
>
> If $f$ generates $\mathbb C(t)$, this degree is $1$. A degree-one map of projective lines has a rational inverse and is bijective.
>
> **(b)** Write $f=P/Q$ in lowest terms. The associated projective map has degree $\max(\deg P,\deg Q)$. Thus $\mathbb C(f)=\mathbb C(x)$ exactly when this degree is $1$, which is precisely when
>
> $$
> f(x)=\frac{ax+b}{cx+d}
> $$
>
> with $ad-bc\ne0$. Conversely, for such a function,
>
> $$
> x=\frac{df-b}{a-cf},
> $$
>
> so $\mathbb C(x)=\mathbb C(f)$ directly.
>
> **(c)** A $\mathbb C$-automorphism is determined by the image of $x$, and that image must be another generator. Part (b) therefore gives
>
> $$
> \boxed{\operatorname{Aut}_{\mathbb C}\mathbb C(x)\cong PGL_2(\mathbb C).}
> $$
>
> A matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ acts by $x\mapsto(ax+b)/(cx+d)$, and scalar multiples induce the same automorphism.

## Related Concepts

- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]

## Notes

- **Routing:** Field Theory is primary because generator degree in $\mathbb C(x)$ identifies all automorphisms of the rational function field.
- **Source notation:** The symbols $T$ and $T'$ are the source's two projective Riemann surfaces associated with the function-field inclusion.
- **External standard input:** The equality between rational-map degree and function-field extension degree is the Section 15.9 input used in part (a).
- **Source status:** [S1, Ch. 15, Misc. *M.6, printed p. 476, PDF p. 488]. The algebraic classification is independent.
