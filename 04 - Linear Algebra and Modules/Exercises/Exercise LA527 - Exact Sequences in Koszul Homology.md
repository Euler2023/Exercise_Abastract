---
title: "Exercise LA527: Exact Sequences in Koszul Homology"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XXI, Exercise 1, printed p. 864, PDF p. 879"
created: 2026-09-29
---

# Exercise LA527: Exact Sequences in Koszul Homology

## Problem Statement

> [!question] Lang, Ch. XXI, Exercise 1
> For exercises 1 through 4 on the Koszul complex, see [No 68], Chapter 8.
>
> Let $0\to M'\to M\to M''\to0$ be an exact sequence of $A$-modules. Show that tensoring with the Koszul complex $K(x)$ one gets an exact sequence of complexes, and therefore an exact homology sequence
>
> $$
> \begin{aligned}
> 0&\to H_rK(x;M')\to H_rK(x;M)\to H_rK(x;M'')\to\cdots\\
> &\cdots\to H_pK(x;M')\to H_pK(x;M)\to H_pK(x;M'')\to\cdots\\
> &\cdots\to H_0K(x;M')\to H_0K(x;M)\to H_0K(x;M'')\to0.
> \end{aligned}
> $$

## Hints

> [!hint]- Hint 1: Look at one degree
> Each $K_p(x)$ is finite free. Tensoring it with the module sequence gives a direct sum of copies of that sequence.

> [!hint]- Hint 2: Construct the connecting map
> Lift a cycle in $K_p(x;M^{\prime\prime})$ to the middle complex, apply the differential, and lift the result uniquely to $K_{p-1}(x;M^{\prime})$.

## Solution

> [!success]- Complete independent derivation
> Let $x=(x_1,\ldots,x_r)$. In degree $p$, $K_p(x)$ is free with basis indexed by the $p$-element subsets of $\{1,\ldots,r\}$. Hence
>
> $$
> 0\to K_p(x)\otimes M'\to K_p(x)\otimes M\to K_p(x)\otimes M''\to0
> $$
>
> is a direct sum of $\binom rp$ copies of the original exact sequence. The differentials commute with these maps, giving a short exact sequence of complexes $0\to C'\xrightarrow{i}C\xrightarrow{\pi}C''\to0$.
>
> For a cycle $z''\in C''_p$, lift it to $z\in C_p$. Since $\pi(dz)=0$, there is a unique $y'\in C'_{p-1}$ with $iy'=dz$. Then $idy'=0$, so $y'$ is a cycle. Define $\partial[z'']=[y']$. Replacing $z$ by $z+iu'$ adds $du'$ to $y'$. Replacing $z''$ by $z''+dv''$ changes a lift by the differential of a lift of $v''$ and an element of $iC'_p$, so the homology class is again unchanged. Thus $\partial$ is well-defined and linear.
>
> We check exactness at all three kinds of term. A cycle $z\in C_p$ whose image is a boundary becomes a cycle in $iC'_p$ after subtracting the differential of a lift of that boundary's primitive. Thus $\ker\pi_* =\operatorname{im}i_*$. If $\partial[z'']=0$, write $dz=idu'$ and replace $z$ by $z-iu'$, a cycle lifting $z''$. Thus $\ker\partial=\operatorname{im}\pi_*$. Finally, if a cycle $y'\in C'_{p-1}$ becomes $dz$ in $C$, then $\pi z$ is a cycle and $\partial[\pi z]=[y']$. Hence $\ker i_*=\operatorname{im}\partial$. The reverse containments follow from the definitions.
>
> The complexes vanish above degree $r$ and below degree zero, so the resulting long exact sequence has precisely the displayed endpoints. This also covers $r=0$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Koszul Complexes and Regular Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules]]

## Notes

Statement and common reference checked at printed p. 864 / PDF p. 879. The proof is an independent chain-level derivation, with all tensors over $A$; no theorem from the external [No 68] is imported.
