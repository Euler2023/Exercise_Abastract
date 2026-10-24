---
title: 'Exercise AG46: Norms over a Completed Maximal Unramified Field'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 2, printed p. 332, PDF p. 351
source_refs:
- S4/ch-V/sec-2/ex-2
created: '2026-10-23'
---

# Exercise AG46: Norms over a Completed Maximal Unramified Field

## Problem Statement

> [!question] Neukirch V.2.2
> Let $L/K$ be a totally ramified Galois extension, and let $\widehat L$ (resp. $\widehat K$) be the completion of the maximal unramified extension $\widetilde L$ (resp. $\widetilde K$) of $L$ (resp. $K$). Show that $N_{\widehat L/\widehat K}\widehat L^*=\widehat K^*$, and that every $y\in\widehat L^*$ with $N_{\widehat L/\widehat K}(y)=1$ is of the form $y=\prod_i z_i^{\sigma_i-1}$, $\sigma_i\in G(L/K)$.

## Hints

> [!hint]- Hint 1
> Separate the valuation and unit conditions for the norm, and remember that the source field is completed after passing to the maximal unramified extension.

> [!hint]- Hint 2
> Use vanishing of the Brauer group over a complete discretely valued field with algebraically closed residue field. Treat cyclic quotients first; then induct through a cyclic series of the finite local Galois group.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Write $F=\widehat K$, $E=\widehat L$, and $G=G(L/K)=G(E/F)$. Completion preserves this finite totally ramified extension and its group; both residue fields are $\overline\kappa$. We use two explicitly named external inputs. The Witt residue theorem for a complete discretely valued field with perfect residue field gives
> $$
> 0\longrightarrow\operatorname{Br}(\kappa_F)\longrightarrow\operatorname{Br}(F)
> \longrightarrow H^1(\kappa_F,\mathbb Q/\mathbb Z)\longrightarrow0.
> $$
> Thus $\operatorname{Br}(F)=0$ when $\kappa_F$ is algebraically closed; the same holds for every finite intermediate field of $E/F$. For a finite cyclic extension $E_1/F_1$, the cyclic-algebra theorem identifies $F_1^*/N E_1^*$ with the relative Brauer group. Consequently every cyclic norm occurring here is onto. We do not reprove these more general Brauer-group theorems in this note.
>
> The finite local Galois group is solvable: its wild inertia is a finite $p$-group, and its tame quotient is cyclic because the extension is totally ramified. Choose a normal series with cyclic factors and take the corresponding tower of intermediate fields. Surjectivity of each cyclic norm and transitivity of norms prove $N_{E/F}E^*=F^*$.
>
> We now prove the asserted kernel equality, rather than importing it as an extra conclusion. Induct on $|G|$, choosing $N\triangleleft G$ with $G/N=\langle\bar\tau\rangle$ cyclic and $E_0=E^N$. Let $y\in E^*$ have $N_Gy=1$. Put $z=N_Ny$. Since $N_{E_0/F}z=1$, cyclic Hilbert 90 gives $z=w^{\bar\tau-1}$ for some $w\in E_0^*$. The norm $N_N:E^*\to E_0^*$ is onto by the preceding argument, so choose $b$ with $N_Nb=w$. A lift $\tau\in G$ satisfies
> $$
> N_N\bigl(y/b^{\tau-1}\bigr)=z/w^{\bar\tau-1}=1.
> $$
> By induction $y/b^{\tau-1}$ is a product of $a^{\rho-1}$ with $\rho\in N$. Multiplying back by $b^{\tau-1}$ gives the required expression. The reverse inclusion follows immediately by taking the full norm. Therefore
> $$
> \ker N_G=I_GE^*=\left\{\prod_i z_i^{\sigma_i-1}\right\}.
> $$
> The cyclic base case is Hilbert 90, and the trivial-group case is immediate.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 2, printed p. 332, PDF p. 351]. Original page inspected at 200 dpi. Independent solution by cyclic algebras, the Witt Brauer residue theorem, local ramification theory, and Hilbert 90; these external standard inputs are stated explicitly. The solution proves the augmentation-ideal kernel by induction, not by an unproved generalization of cyclic Hilbert 90.
