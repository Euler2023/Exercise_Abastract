---
title: "Exercise G144: Quaternion Norm, Inverses, and the Unit Quaternion Group"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - quaternions
  - special-unitary-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.4, printed p. 288, PDF p. 300"
created: 2026-08-24
---

# Exercise G144: Quaternion Norm, Inverses, and the Unit Quaternion Group

## Problem Statement

> [!question] Miscellaneous Exercise M.4
> Quaternions are expressions $\alpha=a+bi+cj+dk$, where $a,b,c,d$ are real numbers (see (9.3.3)).
>
> (a) Let $\overline\alpha=a-bi-cj-dk$. Compute $\overline\alpha\alpha$.
>
> (b) Prove that every $\alpha\ne0$ has a multiplicative inverse.
>
> (c) Prove that the set of quaternions $\alpha$ such that $a^2+b^2+c^2+d^2=1$ forms a group under multiplication that is isomorphic to $SU_2$.

## Hints

> [!hint]- Hint 1
> The mixed terms cancel because $i,j,k$ anticommute.

## Solution

> [!success]- Solution
> **(a)** Direct multiplication gives
>
> $$
> \overline\alpha\alpha=\alpha\overline\alpha=a^2+b^2+c^2+d^2=N(\alpha).
> $$
>
> **(b)** If $\alpha\ne0$, then $N(\alpha)>0$ and
>
> $$
> \alpha^{-1}=\frac{\overline\alpha}{N(\alpha)}.
> $$
>
> **(c)** Conjugation reverses products, so $N(\alpha\beta)=N(\alpha)N(\beta)$. Hence norm-one quaternions are closed under products and inverses. The map
>
> $$
> a+bi+cj+dk\longmapsto
> \begin{pmatrix}
> a+bi&-c-di\\
> c-di&a-bi
> \end{pmatrix}
> $$
>
> respects multiplication, is injective, and has image exactly the matrices in $SU_2$. Thus the norm-one quaternions form a group isomorphic to $SU_2$.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Quaternion Group|Quaternion Group]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]

## Notes

- The quaternion norm is the determinant in the displayed $2\times2$ complex matrix model.
- **Source status:** The quaternion basis and M.4 were visually checked at [S1, Ch. 9, §9.3 and Misc. Ex. M.4, printed pp. 266–267 and 288, PDF pp. 278–279 and 300]. The calculations are independent.
