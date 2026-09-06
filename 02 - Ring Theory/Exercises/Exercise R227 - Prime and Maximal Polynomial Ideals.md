---
title: "Exercise R227: Prime and Maximal Polynomial Ideals"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 1, printed p. 213, PDF p. 228"
created: 2026-09-06
---

# Exercise R227: Prime and Maximal Polynomial Ideals

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 1
> Let $k$ be a field and $f(X)\in k[X]$ a nonzero polynomial. Show that the following conditions are equivalent:
>
> (a) The ideal $(f(X))$ is prime.
>
> (b) The ideal $(f(X))$ is maximal.
>
> (c) $f(X)$ is irreducible.

## Hints

> [!hint]- Hint 1
> Use that $k[X]$ is a Euclidean domain.

> [!hint]- Hint 2
> For an irreducible $f$, apply a Bezout identity to $f$ and any polynomial not divisible by $f$.

## Solution

> [!success]- Solution
> ### Approach
> Use that $k[X]$ is a Euclidean domain.
>
> ### Proof
> If $f$ is a nonzero constant, it is a unit, $(f)=k[X]$ is not a proper ideal, and all three conditions are false. Assume henceforth that $\deg f>0$.
>
> **(b) implies (a).** The quotient by a maximal ideal is a field, hence a domain, so the ideal is prime.
>
> **(a) implies (c).** If $f=gh$ with both factors of positive degree, then $gh\in(f)$ but neither $g$ nor $h$ belongs to $(f)$, since their degrees are smaller than $\deg f$. This contradicts primality.
>
> **(c) implies (b).** If $g\notin(f)$, irreducibility gives $\gcd(f,g)=1$. The Euclidean algorithm gives $u,v\in k[X]$ with $uf+vg=1$. Thus the nonzero class of $g$ in $k[X]/(f)$ is invertible, with inverse the class of $v$. The quotient is a field, and $(f)$ is maximal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 1, printed p. 213, PDF p. 228]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
