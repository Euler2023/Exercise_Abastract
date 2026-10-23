---
title: 'Exercise Gal203: The Maximal Abelian p Ramified Galois Group'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 3, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-3
created: '2026-10-23'
---

# Exercise Gal203: The Maximal Abelian p Ramified Galois Group

## Problem Statement

> [!question] Neukirch VI.5.3
> Let $p$ be a prime number, and let $M_p|K$ be the maximal abelian $p$-extension unramified outside of $\{\mathfrak p\mid p\}$. Further, let $H|K$ be the maximal unramified subextension of $M_p|K$ in which the infinite places split completely. Then there is an exact sequence
> $$
> 1\longrightarrow G(M_p|H)\longrightarrow G(M_p|K)\longrightarrow Cl_K(p)\longrightarrow1,
> $$
> where $Cl_K(p)$ is the $p$-Sylow subgroup of the ideal class group $Cl_K$, and there is a canonical isomorphism
> $$
> G(M_p|H)\simeq\prod_{\mathfrak p\mid p}U_{\mathfrak p}^{(1)}/\bigl(\prod_{\mathfrak p\mid p}U_{\mathfrak p}^{(1)}\cap\bar E\bigr),
> $$
> where $\bar E$ is the closure of the (diagonally embedded) unit group $E=\mathcal O_K^*$ in $\prod_{\mathfrak p\mid p}U_{\mathfrak p}$.

> [!warning] Source issue / proof scope
> For p=2 with real places, the displayed unit quotient omits real sign factors under the source convention. A rational cyclotomic example and the corrected exact sequence are given below.

## Hints

> [!hint]- Hint
> Use inverse limits of ray class sequences supported above $p$. For $p=2$, check the real sign groups explicitly.

> [!hint]- Stronger hint
> Take p-parts of ray exact sequences and inverse limits, retaining real sign factors when p=2.

## Solution

> [!success]- Independent derivation
> **Source issue at $p=2$.** If real places are allowed to become complex, as permitted by the book's convention calling $\mathbb C/\mathbb R$ unramified, the second printed formula omits real signs. For example, take $K=\mathbb Q,p=2$: its right side is $\mathbb Z_2^\times/\{\pm1\}\cong\mathbb Z_2$, while the Galois group of the maximal abelian $2$-ramified cyclotomic extension is $\mathbb Z_2^\times\cong\mathbb Z_2\times C_2$. The general corrected version is given below and recovers the printed formula for odd $p$.
> Let
> $$
> \mathcal U_p=\left(\prod_{v\mid p}U_v\times\{\pm1\}^{r_1}\right)^{(p)}
> $$
> be the maximal pro-$p$ quotient of this compact abelian group, and let $E_p$ be the closure of the diagonal image of the global units in $\mathcal U_p$. Take $p$-parts in the ray exact sequence for the moduli $\prod_{v\mid p}\mathfrak p_v^n$ and then pass to the inverse limit. The inverse limits of the finite unit residue groups are the local unit groups, and the sign conditions retain all real signs. This yields
> $$
> 1\to\mathcal U_p/E_p\to G(M_p/K)\to\mathrm{Cl}_K(p)\to1.
> $$
> The right side is finite. By global class field theory, its fixed field is exactly $H$, the maximal $p$-subextension unramified at all finite places and completely split at all infinite places. Hence the kernel is $G(M_p/H)$, proving the first formula.
> If $p$ is odd, the $p$-part of the real sign group is trivial. The group $U_v/U_v^{(1)}$ has order $q_v-1$, coprime to $p$. Therefore $\mathcal U_p=\prod_{v\mid p}U_v^{(1)}$, and the closure of the global units in this group equals $\bar E\cap\prod U_v^{(1)}$, recovering the printed formula. If $p=2$ and $K$ is totally imaginary, there is likewise no real-sign correction.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 3, printed p.394, PDF p.413]. The solution is independently derived. The superscript $(p)$ denoting the maximal pro-$p$ quotient differs from the book's notation $U_v^{(1)}$ for principal units. This exercise must not obscure the convention-dependent distinction between real places and narrow class groups.
