---
title: "Exercise G156: Diagonal S3 Actions on Product Sets"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - orbits
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 7, Ex. 7.3, printed p. 190, PDF p. 202"
created: 2026-08-27
---

# Exercise G156: Diagonal S3 Actions on Product Sets

## Problem Statement

> [!question] Exercise 7.3
> The symmetric group $S_3$ operates on two sets $U$ and $V$ of order $3$. Decompose the product set $U\times V$ into orbits for the diagonal action $g(u,v)=(gu,gv)$, when
>
> (a) the operations on $U$ and $V$ are transitive;
>
> (b) the operation on $U$ is transitive, and the orbits for the operation on $V$ are $\{v_1\}$ and $\{v_2,v_3\}$.

## Hints

> [!hint]- Hint 1
> Every transitive $S_3$-action on three points is equivalent, after relabeling, to the natural action.

> [!hint]- Hint 2
> In part (b), the action on $\{v_2,v_3\}$ factors through the sign map $S_3\to C_2$.

## Solution

> [!success]- Solution
> **(a)** Relabel $U=\{u_1,u_2,u_3\}$ and $V=\{v_1,v_2,v_3\}$ so that $g(u_i)=u_{g(i)}$ and $g(v_i)=v_{g(i)}$. Equality of indices is invariant under the diagonal action. Thus
>
> $$
> \Delta=\{(u_i,v_i):1\le i\le3\}
> $$
>
> is one orbit of size $3$. The six pairs with unequal indices form a second orbit: $S_3$ acts simply transitively on ordered pairs $(i,j)$ with $i\ne j$. Hence $U\times V=\Delta\sqcup\Delta^c$.
>
> **(b)** The three points $(u,v_1)$ form one orbit $U\times\{v_1\}$ because $v_1$ is fixed and the action on $U$ is transitive. For $(u_i,v_2)$, its stabilizer is the intersection of an order-two point stabilizer in the natural action with $A_3$, the stabilizer of $v_2$ in the two-point action. This intersection is trivial. Its orbit therefore has size $6$ and equals
>
> $$
> U\times\{v_2,v_3\}.
> $$
>
> So part (b) also has two orbits, now of sizes $3$ and $6$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Orbit–stabilizer in group actions]]

## Notes

- The diagonal action couples the two coordinates; its orbits are not generally products of separate orbits.
- **Source status:** The statement was visually checked at [S1, Ch. 6, §7, Ex. 7.3, printed p. 190, PDF p. 202]. The decomposition is independent.
