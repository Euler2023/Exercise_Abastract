---
title: "Exercise LA301: Projective Action of GL2 over F3"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - general-linear-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.6, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise LA301: Projective Action of GL2 over F3

## Problem Statement

> [!question] Exercise 11.6
> Let $F=\mathbb F_3$. There are four one-dimensional subspaces of the space of column vectors $F^2$. List them. Left multiplication by an invertible matrix permutes these subspaces. Prove that this operation defines a homomorphism $\varphi:GL_2(F)\to S_4$. Determine the kernel and image of this homomorphism.

## Hints

> [!hint]- Hint 1
> Representatives for the four lines are $(1,0)^{\mathsf T},(0,1)^{\mathsf T},(1,1)^{\mathsf T},(1,-1)^{\mathsf T}$.

> [!hint]- Hint 2
> A matrix fixing every line in $F^2$ must be scalar.

## Solution

> [!success]- Solution
> The four lines are
>
> $$
> \langle(1,0)^{\mathsf T}\rangle,quad
> \langle(0,1)^{\mathsf T}\rangle,quad
> \langle(1,1)^{\mathsf T}\rangle,quad
> \langle(1,-1)^{\mathsf T}\rangle.
> $$
>
> Invertible matrices send nonzero vectors to nonzero vectors and preserve scalar multiples, so they permute these lines. Composition of matrices composes the induced permutations, giving a homomorphism $\varphi:GL_2(\mathbb F_3)\to S_4$.
>
> If $P$ fixes all four lines, it fixes the two coordinate lines and is diagonal, say $P=\operatorname{diag}(a,d)$. Fixing $\langle(1,1)^{\mathsf T}\rangle$ forces $a=d$. Hence
>
> $$
> \ker\varphi=\{I,-I\}.
> $$
>
> Since $|GL_2(\mathbb F_3)|=(9-1)(9-3)=48$, the image has order $48/2=24$. It is a subgroup of $S_4$ of order $24$, so
>
> $$
> \operatorname{im}\varphi=S_4.
> $$
>
> Thus $PGL_2(\mathbb F_3)\cong S_4$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- The four lines form the projective line $\mathbb P^1(\mathbb F_3)$.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.6, printed p. 192, PDF p. 204]; independent finite calculation.

