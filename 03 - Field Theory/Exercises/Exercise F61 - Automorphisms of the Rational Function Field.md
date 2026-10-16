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
> **(a)** Prove that a rational function $f(t)$ that generates the field $\mathbb C(t)$ of all rational functions defines a bijective map $T'\to T'$.
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
> Write $m_M(x)=(ax+b)/(cx+d)$ for the fractional map associated with $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, and let $\sigma_M$ be the field substitution $r(x)\mapsto r(m_M(x))$. Then
> $$
> (\sigma_M\circ\sigma_N)(x)=m_N(m_M(x))=m_{NM}(x).
> $$
> Thus direct field substitutions reverse the order of matrix multiplication. The displayed group isomorphism uses $[M]\mapsto\sigma_{M^{-1}}$. Scalar multiples give the same fractional map, and the inverse-matrix convention makes composition agree with multiplication in $PGL_2(\mathbb C)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]

## Notes

- **Routing:** Field Theory is primary because generator degree in $\mathbb C(x)$ identifies all automorphisms of the rational function field.
- **Source notation:** The printed map in part (a) is $T'\to T'$, rechecked at printed p. 476 / PDF p. 488. The primes are interpreted under §15.9's convention of discarding finite exceptional sets. The solution uses the extension to the projective line, on which a degree-one rational map is bijective everywhere; this is an explicit stronger interpretation, not a claim that the source defines $T$ to be projective.
- **Artin and Lang comparison:** The degree equality used in part (a) has a complete independent algebraic proof over an arbitrary field in [[03 - Field Theory/Exercises/Exercise F62 - Automorphisms of K of X over an Arbitrary Field|F62]], based on Lang IV Exercise 10 [S2, printed p. 214, PDF p. 229]. See also [[05 - Galois Theory/Exercises/Exercise Gal119 - Degree of Rational Functions and Automorphisms of Rational Function Fields|Gal119]], Lang VI Exercise 35 [S2, printed p. 326, PDF p. 341]. These are exercise solutions in this vault, not proofs supplied by Lang's exercise statements. The equality is not asserted as a numbered theorem proved in Artin §15.9.
- **Source status:** [S1, Ch. 15, Misc. *M.6, printed p. 476, PDF p. 488]. The algebraic classification is independent.
