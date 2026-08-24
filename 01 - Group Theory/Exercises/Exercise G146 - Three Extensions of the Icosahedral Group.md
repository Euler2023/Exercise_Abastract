---
title: "Exercise G146: Three Extensions of the Icosahedral Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - icosahedral-group
  - group-extensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.9, printed p. 288, PDF p. 300"
created: 2026-08-24
---

# Exercise G146: Three Extensions of the Icosahedral Group

## Problem Statement

> [!question] Miscellaneous Exercise M.9
> The icosahedral group is a subgroup of index $2$ in the group $G_1$ of all symmetries of a dodecahedron, including orientation-reversing symmetries. The alternating group $A_5$ is a subgroup of index $2$ of the symmetric group $G_2=S_5$. Finally, consider the spin homomorphism $\varphi:SU_2\to SO_3$. Let $G_3$ be the inverse image of the icosahedral group in $SU_2$. Are any of the groups $G_i$ isomorphic?

## Hints

> [!hint]- Hint 1
> All three groups have order $120$; compare their centers and their elements of order $2$.

## Solution

> [!success]- Solution
> The orientation-preserving icosahedral group is $A_5$ of order $60$, so every $G_i$ has order $120$.
>
> Central inversion commutes with all dodecahedral symmetries and splits the orientation character, giving
>
> $$
> G_1\cong A_5\times C_2.
> $$
>
> Thus $Z(G_1)\cong C_2$, while $Z(G_2)=Z(S_5)$ is trivial. Hence $G_1\not\cong G_2$.
>
> The group $G_3$ is the binary icosahedral group. Its center is $\{\pm I\}$, so it is not isomorphic to $S_5$. It is also not isomorphic to $A_5\times C_2$: the only element of order $2$ in $SU_2$ is $-I$, because a unit quaternion satisfying $q^2=1$ must be $q=\pm1$. In contrast, $A_5\times C_2$ has many noncentral involutions.
>
> Therefore no two of $G_1,G_2,G_3$ are isomorphic.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- The groups illustrate three distinct extensions of $A_5$ by a group of order $2$: direct, nonsplit symmetric, and binary central.
- **Source status:** M.9 was visually checked at [S1, Ch. 9, Misc. Ex. M.9, printed p. 288, PDF p. 300]. The center and involution distinctions are independent.

