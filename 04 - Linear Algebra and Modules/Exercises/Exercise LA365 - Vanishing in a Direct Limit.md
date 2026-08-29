---
title: "Exercise LA365: Vanishing in a Direct Limit"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - direct-limits
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 19, printed p. 170, PDF p. 185"
created: 2026-08-29
---

# Exercise LA365: Vanishing in a Direct Limit

## Problem Statement

> [!question] Exercise 19
> Let $(A_i,f_j^i)$ be a directed family of modules, where $f_j^i:A_i\to A_j$ for $i\le j$. Let $a_k\in A_k$ for some $k$, and suppose that the image of $a_k$ in the direct limit $A$ is $0$. Show that there exists some index $j\ge k$ such that
>
> $$
> f_j^k(a_k)=0.
> $$
>
> In other words, whether some element in some group $A_i$ vanishes in the direct limit can already be seen within the original data. One way to see this is to use the construction of Theorem 10.1.

## Hints

> [!hint]- Hint 1
> Use the concrete construction of the direct limit by equivalence classes of pairs $(i,a_i)$.

> [!hint]- Hint 2
> The equality of the classes of $(k,a_k)$ and $(k,0)$ means that the two representatives agree after being sent to one sufficiently late stage.

## Solution

> [!success]- Independently derived solution
> Recall the equivalence-relation construction of the direct limit. On the disjoint union of the modules $A_i$, declare
>
> $$
> (i,a_i)\sim(j,a_j)
> $$
>
> if there is an index $\ell\ge i,j$ such that
>
> $$
> f_\ell^i(a_i)=f_\ell^j(a_j).
> $$
>
> Directedness makes this relation transitive, and the class of $(i,a_i)$ is the canonical image of $a_i$ in $A=\varinjlim_iA_i$.
>
> By hypothesis, the class of $(k,a_k)$ is the zero class, which is represented by $(k,0)$. Hence
>
> $$
> (k,a_k)\sim(k,0).
> $$
>
> By the definition of $\sim$, there is some $j\ge k$ for which
>
> $$
> f_j^k(a_k)=f_j^k(0)=0.
> $$
>
> Thus vanishing in the direct limit is detected at a finite stage of the original directed system.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Method boundary:** The argument uses the concrete equivalence-class model of a filtered direct limit. It is the finite-stage vanishing criterion used repeatedly in Exercises III.21 and III.26.
- **Source status:** The statement and reference to Theorem 10.1 were visually checked at [S2, Ch. III, Ex. 19, printed p. 170, PDF p. 185]. The proof is independent.

