---
title: "Exercise Rep13: Extending the Spin Representation to U2"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - spin-representation
  - unitary-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 4, Ex. 4.3, printed p. 284, PDF p. 296"
created: 2026-08-24
---

# Exercise Rep13: Extending the Spin Representation to U2

## Problem Statement

> [!question] Exercise 4.3
> Extend the orthogonal representation $\varphi:SU_2\to SO_3$ to a homomorphism $\phi:U_2\to SO_3$, and describe the kernel of $\phi$.

## Hints

> [!hint]- Hint 1
> Let $U_2$ act by conjugation on the real vector space of traceless skew-Hermitian $2\times2$ matrices.

> [!hint]- Hint 2
> Scalar unitary matrices act trivially, and every unitary matrix is a scalar multiple of an element of $SU_2$.

## Solution

> [!success]- Solution
> Let
>
> $$
> V=\{A\in M_2(\mathbb C):A^*=-A,\ \operatorname{tr}A=0\}.
> $$
>
> This is a three-dimensional real inner-product space with
>
> $$
> \langle A,B\rangle=-\frac12\operatorname{tr}(AB).
> $$
>
> For $P\in U_2$, define $\phi(P)(A)=PAP^*$. Conjugation preserves skew-Hermitian matrices, trace, and the displayed inner product, so $\phi(P)\in O(V)$. The map $\phi$ is a homomorphism. Since $U_2$ is connected and $\phi(I)=I$, its image lies in $SO(V)\cong SO_3$. Its restriction to $SU_2$ is Artin's spin homomorphism $\varphi$, hence $\phi$ is surjective.
>
> If $P$ lies in the kernel, it commutes with every traceless skew-Hermitian matrix, hence with every complex $2\times2$ matrix. Therefore $P=zI$. Conversely, every scalar unitary matrix acts trivially. Thus
>
> $$
> \ker\phi=\{zI:|z|=1\}\cong S^1.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Notes

- The restriction to $SU_2$ has the smaller kernel $\{\pm I\}$.
- **Source status:** The spin homomorphism in §9.4 and Ex. 4.3 were checked at [S1, Ch. 9, §9.4, printed pp. 269–271 and 284, PDF pp. 281–283 and 296]. The extension and kernel proof are independent.
