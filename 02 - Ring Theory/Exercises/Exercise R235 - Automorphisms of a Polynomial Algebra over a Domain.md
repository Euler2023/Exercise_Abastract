---
title: "Exercise R235: Automorphisms of a Polynomial Algebra over a Domain"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 9, printed p. 214, PDF p. 229"
created: 2026-09-06
---

# Exercise R235: Automorphisms of a Polynomial Algebra over a Domain

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 9
> Show that every automorphism of $A[X]$ is of the type described in Exercise 8.

> [!warning] Source issue / scope clarification
> The printed sentence does not repeat the requirement that the automorphism induce the identity on $A$. The intended classification is of $A$-algebra automorphisms. Without this hypothesis the printed assertion is false, as the coefficient-conjugation counterexample below shows.

## Hints

> [!hint]- Hint 1
> First specify that the automorphism fixes $A$. Apply its inverse to the image of $X$.

> [!hint]- Hint 2
> Over a domain, degrees of compositions of nonconstant polynomials multiply.

## Solution

> [!success]- Solution
> ### Approach
> First specify that the automorphism fixes $A$. Apply its inverse to the image of $X$.
>
> ### Proof
> We prove the intended assertion for $A$-algebra automorphisms. Let $\sigma$ and $\tau=\sigma^{-1}$ fix $A$, and write $f=\sigma(X)$ and $g=\tau(X)$. Neither polynomial is constant: if $f\in A$, then $X=\tau(f)=f\in A$, impossible. Since $A$ is a domain, nonzero leading coefficients cannot cancel in composition, giving
> $$
> 1=\deg X=\deg(g(f(X)))=(\deg g)(\deg f).
> $$
> Thus $f=aX+b$ and $g=cX+d$ with $a,c\ne0$. Comparing the coefficient of $X$ in $g(f(X))=X$ gives $ca=1$. Therefore $a$ is a unit, and Exercise 8 gives exactly these automorphisms.
>
> For the printed unrestricted assertion, take $A=\mathbb C$ and conjugate every coefficient while fixing $X$. This is a ring automorphism of $\mathbb C[X]$ but does not induce the identity on $A$, so it is not of the type specified in Exercise 8.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Exercises/Exercise R234 - Affine Substitutions over an Integral Domain|R234 — Affine Substitutions over an Integral Domain]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 9, printed p. 214, PDF p. 229]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
