---
title: "Exercise F24: Splitting Field Degree Divides n Factorial"
topic: field-theory
difficulty: intermediate
status: not-started
tags: [exercise, field-theory, splitting-fields]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 3, Ex. 3.1, printed p. 506, PDF p. 518; Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 8, printed p. 253, PDF p. 268"
created: 2026-08-12
---

# Exercise F24: Splitting Field Degree Divides $n!$

## Problem Statement

> [!question] Exercise 3.1
> Let $f$ be a polynomial of degree $n$ over $F$, and let $K$ be a splitting field for $f$ over $F$. Prove that $[K:F]$ divides $n!$.

> [!question] Lang, Chapter V, Exercise 8
> Let $f(X)\in k[X]$ be a polynomial of degree $n$. Let $K$ be its splitting field. Show that $[K:k]$ divides $n!$.

## Hints

> [!hint]- Hint 1
> First treat irreducible $f$ by adjoining one root and removing only its linear factor. For reducible $f$, split an irreducible factor completely before removing it.

## Solution

> [!success]- Solution
> We prove the assertion simultaneously over every base field by strong induction on $n$, without a separability assumption. Degrees zero and one have splitting field equal to the base field (with $0!=1$ for a nonzero constant polynomial).
>
> If $f$ is irreducible of degree $n$, choose a root $\alpha$ and put $E=F(\alpha)$. Then $[E:F]=n$. The polynomial $f(X)/(X-\alpha)\in E[X]$ has degree $n-1$, and $K$ is its splitting field over $E$, because $\alpha$ is already in $E$. Induction gives
> $$
> [K:E]\mid(n-1)!,\qquad [K:F]=n[K:E]\mid n!.
> $$
>
> If $f$ is reducible, choose an irreducible factor $g$ of degree $d<n$ and let $L\subseteq K$ be its full splitting field over $F$. Induction gives $[L:F]\mid d!$. Over $L$, the remaining polynomial $f/g$ has degree $n-d$ and splitting field $K$, so $[K:L]\mid(n-d)!$. Hence
> $$
> [K:F]\mid d!(n-d)!\mid n!,
> $$
> where the final divisibility follows from $n!/(d!(n-d)!)=\binom nd\in\mathbb Z$. Repeated roots cause no difficulty in either step.

## Related Concepts

- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]

## Notes

- **Proof correction (2026-09-06):** The earlier argument removed an entire irreducible factor after adjoining only one of its roots. Its other roots need not lie in that simple extension. The induction above removes only a linear factor in the irreducible case, and removes a whole factor only after adjoining its full splitting field.
- **Method boundary:** The induction proves the characteristic-free statement. In the separable case there is also the shorter faithful embedding $\operatorname{Gal}(K/F)\hookrightarrow S_n$.
- **Source status:** Lang's identical mathematical task was checked on [S2, Ch. V, Ex. 8, printed p. 253, PDF p. 268]. The corrected proof is an independent derivation; the existing Artin provenance is retained.
