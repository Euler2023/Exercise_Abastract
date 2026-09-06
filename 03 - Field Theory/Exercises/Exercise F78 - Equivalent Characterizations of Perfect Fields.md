---
title: "Exercise F78: Equivalent Characterizations of Perfect Fields"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 17, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F78: Equivalent Characterizations of Perfect Fields

## Problem Statement

> [!question] Lang, Chapter V, Exercise 17
> Prove that the following two properties are equivalent:
>
> (a) Every algebraic extension of $K$ is separable.
>
> (b) Either $\operatorname{char}K=0$, or $\operatorname{char}K=p$ and every element of $K$ has a $p$-th root in $K$.

## Hints

> [!hint]- Hint 1
> If Frobenius is surjective, a polynomial with zero derivative is a $p$th power.

> [!hint]- Hint 2
> If $a\notin K^p$, use the irreducible inseparable polynomial $X^p-a$.

## Solution

> [!success]- Solution and proof status
> **(b) implies (a).** In characteristic zero, the derivative of every nonconstant polynomial is nonzero. Thus an irreducible polynomial is relatively prime to its derivative and is separable.
>
> In characteristic $p>0$, suppose Frobenius is surjective. If an irreducible nonconstant polynomial $f$ were inseparable, then $f'=0$, so
> $$
> f(X)=\sum_j a_jX^{pj}.
> $$
> Choose $b_j\in K$ with $b_j^p=a_j$. Then $f(X)=(\sum_j b_jX^j)^p$, contradicting irreducibility. Consequently every algebraic element over $K$ has a separable minimal polynomial, and every algebraic extension is separable.
>
> **(a) implies (b).** There is nothing to prove in characteristic zero. In characteristic $p>0$, if $a$ had no $p$th root in $K$, V.15 would make $X^p-a$ irreducible. In an algebraic closure it equals $(X-\alpha)^p$, so $K(\alpha)/K$ would not be separable, contradicting (a). Frobenius is therefore surjective.

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]

## Notes

- **Dependency:** The required irreducibility argument is proved in [[03 - Field Theory/Exercises/Exercise F76 - Irreducibility of Purely Inseparable Binomials|V.15 / F76]].

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 17, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
