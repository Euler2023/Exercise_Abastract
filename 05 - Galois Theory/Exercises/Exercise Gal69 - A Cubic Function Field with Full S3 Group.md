---
title: "Exercise Gal69: A Cubic Function Field with Full S3 Group"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, function-fields, ramification]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.9, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise Gal69: A Cubic Function Field with Full $S_3$ Group

## Problem Statement

> [!question] Exercise M.9
> Let $f(t,x)\in\mathbb C[t,x]$ be irreducible, monic cubic in $x$. If for some $t_0$, $f(t_0,x)$ has one simple and one double root, prove its splitting field over $\mathbb C(t)$ has degree $6$.

## Hints

> [!hint]- Hint 1
> Irreducibility gives a transitive subgroup of $S_3$; local continuation around the double-root parameter gives a transposition.

## Solution

> [!success]- Solution
> Irreducibility over $\mathbb C[t]$, hence over $\mathbb C(t)$ by Gauss's lemma, makes the Galois group $G\le S_3$ transitive. Near $t_0$, the simple root continues single-valuedly, while the two branches meeting at the double root are exchanged by analytic continuation around a small loop about $t_0$. Thus the local monodromy contains a transposition.
>
> The only transitive subgroups of $S_3$ are $A_3$ and $S_3$, and $A_3$ has no transposition. Hence $G=S_3$, so the splitting-field degree is $6$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois and Monodromy]]

## Notes

The local branch-exchange statement is the analytic monodromy input. It is valid for the ordinary double-root specialization intended by the exercise; a nontransverse higher-order collision would require a refined local argument.
