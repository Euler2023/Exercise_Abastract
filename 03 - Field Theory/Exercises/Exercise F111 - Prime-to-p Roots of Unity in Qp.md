---
title: "Exercise F111: Prime-to-p Roots of Unity in Qp"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - p-adic-fields
  - roots-of-unity
  - hensel-lifting
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 11, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise F111: Prime-to-p Roots of Unity in Qp

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 11
> Prove that the field $\mathbb Q_p$ contains all $(p-1)$-th roots of unity. [Hint: Use Proposition 7.6, applied to the polynomial $X^{p-1}-1$, which splits into factors of degree $1$ in the residue class field.] Show that two distinct $(p-1)$-th roots of unity cannot be congruent mod $p$.

## Hints

> [!hint]- Hint 1: Reduce the polynomial
> Every nonzero element of $\mathbb F_p$ is a root of $X^{p-1}-1$.

> [!hint]- Hint 2: Check simplicity
> Compute the derivative $(p-1)X^{p-2}$ at each nonzero residue class and lift the root to $\mathbb Z_p$.

> [!hint]- Hint 3: Compare reductions
> A lift from each of the $p-1$ distinct residue classes supplies every root of the degree-$(p-1)$ polynomial.

## Solution

> [!success]- Solution
> If $p=2$, the polynomial is $X-1$ and the assertions are immediate. Suppose $p>2$. Fermat's theorem gives $a^{p-1}=1$ for every $a\in\mathbb F_p^\times$. The derivative of $f(X)=X^{p-1}-1$ is
>
> $$
> f'(X)=(p-1)X^{p-2},
> $$
>
> and $f'(a)\ne0$ in $\mathbb F_p$ for every $a\ne0$. Choose an integer representative $a_0$ of $a$. Lang's Proposition 7.6 (or its simple-root Corollary 7.4) lifts $a$ to a root $\zeta_a\in\mathbb Z_p$ with $\zeta_a\equiv a\pmod p$.
>
> Distinct residue classes give distinct lifted roots. There are $p-1$ such classes, so we have found $p-1$ distinct roots in $\mathbb Q_p$ of a polynomial of degree $p-1$. Hence $X^{p-1}-1$ splits completely over $\mathbb Q_p$: all its $(p-1)$-th roots of unity lie there.
>
> The same construction shows that the roots $\zeta_a$ have pairwise distinct reductions. Since every root is among them, two distinct $(p-1)$-th roots of unity cannot be congruent modulo $p$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source and proof status:** [S2, Ch. XII, Ex. 11, printed p. 497, PDF p. 512]. The argument independently applies Lang's proved Proposition 7.6 and Corollary 7.4 [S2, Ch. XII, §7, printed p. 493, PDF p. 508].
- **Boundary:** The assertion concerns roots of order dividing $p-1$; it does not claim that $\mathbb Q_p$ contains a primitive $p$-th root of unity.
