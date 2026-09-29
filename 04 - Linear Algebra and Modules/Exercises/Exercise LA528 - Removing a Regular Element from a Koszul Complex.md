---
title: "Exercise LA528: Removing a Regular Element from a Koszul Complex"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XXI, Exercise 2, printed p. 864, PDF p. 879"
created: 2026-09-29
---

# Exercise LA528: Removing a Regular Element from a Koszul Complex

## Problem Statement

> [!question] Lang, Ch. XXI, Exercise 2
> For exercises 1 through 4 on the Koszul complex, see [No 68], Chapter 8.
>
> (a) Show that there is a unique homomorphism of complexes
>
> $$
> f:K(x;M)\to K(x_1,\ldots,x_{r-1};M)
> $$
>
> such that for $v\in M$:
>
> $$
> f_p(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes v)=
> \begin{cases}
> e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes x_rv&\text{if }i_p=r,\\
> e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes v&\text{if }i_p=r.
> \end{cases}
> $$
>
> (b) Show that $f$ is injective if $x_r$ is not a divisor of zero in $M$.
>
> (c) For a complex $C$, denote by $C(-1)$ the complex shifted by one place to the left, so $C(-1)_n=C_{n-1}$ for all $n$. Let $\overline M=M/x_rM$. Show that there is a unique homomorphism of complexes
>
> $$
> g:K(x_1,\ldots,x_{r-1},1;M)\to K(x_1,\ldots,x_{r-1};\overline M)(-1)
> $$
>
> such that for $v\in M$:
>
> $$
> g_p(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes v)=
> \begin{cases}
> e_{i_1}\wedge\cdots\wedge e_{i_{p-1}}\otimes v&\text{if }i_p=r,\\
> 0&\text{if }i_p<r.
> \end{cases}
> $$
>
> (d) If $x_r$ is not a divisor of $0$ in $M$, show that the following sequence is exact:
>
> $$
> 0\to K(x;M)\xrightarrow{f}K(x_1,\ldots,x_{r-1},1;M)
> \xrightarrow{g}K(x_1,\ldots,x_{r-1};\overline M)(-1)\to0.
> $$
>
> Using Theorem 4.5(c), conclude that for all $p\ge0$, there is an isomorphism
>
> $$
> H_pK(x;M)\xrightarrow{\sim}H_pK(x_1,\ldots,x_{r-1};\overline M).
> $$

> [!warning] Source issue
> Part (a) prints a target with only $r-1$ parameters, although its formula still uses $e_r$; (d) identifies the intended target as $K(x_1,\ldots,x_{r-1},1;M)$. Both printed branches say $i_p=r$; the second must be $i_p<r$. The corrected degree-zero map is the identity. In (c), the target coefficient $v$ means $\overline v$. The original expressions are preserved above and these explicit corrections are proved below.

## Hints

> [!hint]- Hint 1: Separate the last exterior factor
> Write the degree-$p$ term as $C_p\oplus C_{p-1}$, where $C=K(x_1,\ldots,x_{r-1};M)$. The components record whether $e_r$ is absent or present.

> [!hint]- Hint 2: Use the middle complex
> The corrected maps are $f_p(v,w)=(v,x_rw)$ and $g_p(v,w)=\overline w$. The middle complex has a generator equal to $1$, so it is contractible.

## Solution

> [!success]- Complete independent derivation
> We prove the corrected statement specified above. Put $C=K(x_1,\ldots,x_{r-1};M)$ and identify the degree-$p$ term with pairs $(v,w)$ representing $v+w\wedge e_r$. With final parameter $a$, the differential is
>
> $$
> d_a(v,w)=(dv+(-1)^{p-1}aw,dw).
> $$
>
> Use the unchanged differential on $C(-1)_p=C_{p-1}$, as in Lang's convention. Define
>
> $$
> f_p(v,w)=(v,x_rw),\qquad g_p(v,w)=\overline w.
> $$
>
> In degree zero this reads $f_0=\operatorname{id}_M$ and $g_0=0$. Directly,
>
> $$
> d_1f_p(v,w)=(dv+(-1)^{p-1}x_rw,x_rdw)=f_{p-1}d_{x_r}(v,w),
> $$
>
> and $g_{p-1}d_1(v,w)=\overline{dw}=d\overline w$. Thus both maps commute with the differentials. Their prescribed values on the exterior basis determine them uniquely. The coefficient in $g$ is the residue class of $v$.
>
> If $x_r$ is injective on $M$, it is injective on every $C_j$, a direct sum of copies of $M$. Hence $f$ is degreewise injective. Each reduction $C_{p-1}\to C_{p-1}/x_rC_{p-1}$ is surjective, so $g$ is surjective. Its kernel consists exactly of the pairs $(v,x_rw)$, which are the image of $f$. This proves the short exact sequence.
>
> Exterior multiplication by the basis vector whose parameter is $1$ gives $dh+hd=1$ on the middle complex. Its homology therefore vanishes in every degree, as in Theorem 4.5(c). The long exact sequence of Exercise 1 gives an isomorphism
>
> $$
> H_{p+1}\bigl(K(x_1,\ldots,x_{r-1};\overline M)(-1)\bigr)
> \xrightarrow{\sim}H_pK(x;M).
> $$
>
> The group on the left is $H_pK(x_1,\ldots,x_{r-1};\overline M)$. Inverting this isomorphism proves the displayed claim for all $p\ge0$, including $r=1$ and zero coefficient modules.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Koszul Complexes and Regular Sequences]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA527 - Exact Sequences in Koszul Homology]]

## Notes

Original formulas checked at printed p. 864 / PDF p. 879. The differential convention and Theorem 4.5(c) were checked at printed pp. 855–856 / PDF pp. 870–871. The proof is independent and does not import Northcott. A shift convention that negates the differential would need corresponding signs in $g$ and must not be mixed with this convention.
