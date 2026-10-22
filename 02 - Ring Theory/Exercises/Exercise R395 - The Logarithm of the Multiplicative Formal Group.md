---
title: 'Exercise R395: The Logarithm of the Multiplicative Formal Group'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 3, printed p. 345, PDF p. 364
source_refs:
- S4/ch-V/sec-4/ex-3
created: '2026-10-23'
---

# Exercise R395: The Logarithm of the Multiplicative Formal Group

## Problem Statement

> [!question] Neukirch V.4.3
> $\log_{\mathbb G_m}(X)=\sum_{n=1}^\infty(-1)^{n+1}\dfrac{X^n}{n}=\log(1+X)$.

## Hints

> [!hint]- Hint 1
> For $\mathbb G_m(X,Y)=X+Y+XY$, the invariant derivative at $Y=0$ is $1+X$.

> [!hint]- Hint 2
> Integrate $(1+X)^{-1}=1-X+X^2-\cdots$ formally and apply the uniqueness from the preceding exercise.

## Solution

> [!success]- Independent derivation
> Work over any commutative $\mathbb Q$-algebra, or over the fraction field of a characteristic-zero coefficient ring. For $F(X,Y)=X+Y+XY$,
> $$
> \partial_2F(X,0)=1+X,\qquad (1+X)^{-1}=\sum_{j\ge0}(-1)^jX^j.
> $$
> Termwise formal integration with zero constant gives
> $$
> \ell(X)=\sum_{j\ge0}\frac{(-1)^j}{j+1}X^{j+1}
> =\sum_{n\ge1}(-1)^{n+1}\frac{X^n}{n}.
> $$
> The preceding logarithm proof gives $\ell(F(X,Y))=\ell(X)+\ell(Y)$ and $\ell'(0)=1$, so uniqueness identifies it with $\log_{\mathbb G_m}$. This is the usual formal expansion of $\log(1+X)$; no analytic choice of logarithm is required.
>
> For a direct check, $1+F(X,Y)=(1+X)(1+Y)$, and differentiation in $Y$ gives
> $$
> \partial_Y\ell(F(X,Y))=\frac{1+X}{1+X+Y+XY}=\frac1{1+Y}=\ell'(Y).
> $$
> At $Y=0$ the integration constant is $\ell(X)$, proving the homomorphism identity independently as well. The inverse is $e^T-1$, by formal exponential and logarithm identities. Over $\mathbb Z_p$ the denominators need not be integral; the logarithm is naturally a formal series over $\mathbb Q_p$, and its convergence at field elements is a separate analytic question.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]

## Notes

- **Source status:** The complete displayed exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 3, printed p. 345, PDF p. 364]; the definition of the multiplicative formal group at [printed p. 342, PDF p. 361].
- **Proof scope:** Independent formal-series derivation. Characteristic zero or a $\mathbb Q$-algebra is essential for the displayed denominators; no integral formal-group isomorphism over $\mathbb Z_p$ is claimed.
