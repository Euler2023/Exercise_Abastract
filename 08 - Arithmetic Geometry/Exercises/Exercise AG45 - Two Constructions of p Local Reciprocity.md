---
title: 'Exercise AG45: Two Constructions of p Local Reciprocity'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 1, printed p. 332, PDF p. 351
source_refs:
- S4/ch-V/sec-2/ex-1
created: '2026-10-23'
---

# Exercise AG45: Two Constructions of p Local Reciprocity

## Problem Statement

> [!question] Neukirch V.2.1
> The $p$-class field theory $(d:G_{\mathbb Q_p}\to\mathbb Z_p,\ v:\mathbb Q_p^*\to\mathbb Z)$ for the unramified $\mathbb Z_p$-extension of $\mathbb Q_p$, and the $p$-class field theory $(\widehat d:G_{\mathbb Q_p}\to\mathbb Z_p,\ \widehat v:\mathbb Q_p^*\to\mathbb Z_p)$ for the cyclotomic $\mathbb Z_p$-extension of $\mathbb Q_p$ (see §1, exercise 7) yield the same norm residue symbol $(\ ,L/K)$.
>
> Hint: Show that this statement is equivalent to formula (2.4): $(u,\mathbb Q_p(\zeta)/\mathbb Q_p)\zeta=\zeta^{u^{-1}}$.

## Hints

> [!hint]- Hint 1
> Normalize the cyclotomic valuation as in Exercise V.1.8.

> [!hint]- Hint 2
> Compare the two reciprocity constructions on the Frobenius lifts used in their definitions; use norm functoriality to descend.

## Solution

> [!success]- Independent derivation
> Let $\operatorname{rec}$ denote ordinary unramified local reciprocity, with a uniformizer acting as arithmetic Frobenius. Choose the cyclotomic degree map and the logarithmic valuation compatibly as in V.1.8. Formula (2.4) says precisely that
> $$
> \widehat v=\widehat d\circ\operatorname{rec}
> $$
> on $\mathbb Q_p^*$: both vanish on $p$ and on the torsion factor, and on the principal-unit factor the formula $\operatorname{rec}(u)\zeta=\zeta^{u^{-1}}$ determines the chosen generator coordinate. The case $p=2$ uses the quotient by $\{\pm1\}$.
>
> We verify that this identity forces the abstract cyclotomic construction to give $\operatorname{rec}$ on every finite abelian $p$-extension. Its definition takes a Frobenius lift $\widetilde\sigma$ of $\sigma\in G(L/K)$ in the composite with the chosen $\mathbb Z_p$ tower. Let $E$ be its fixed field; then $LE/E$ is unramified in the abstract cyclotomic sense and $\widetilde\sigma$ is its Frobenius. Functoriality gives
> $$
> \widehat v_E=\frac{1}{f_E}\widehat v_K\circ N_{E/K}=\widehat d_E\circ\operatorname{rec}_E.
> $$
> Thus if $\pi_E$ has abstract value $1$, its ordinary reciprocity image restricts on $LE/E$ to that Frobenius. Norm compatibility yields
> $$
> \operatorname{rec}_K(N_{E/K}\pi_E)|_L=\widetilde\sigma|_L=\sigma.
> $$
> But $N_{E/K}\pi_E$ is exactly the element assigned to $\sigma$ by the inverse abstract reciprocity map. Hence the two norm residue maps agree.
>
> This proves the exercise from the independently established formula (2.4). A $\mathbb Z_p$ tower alone does not recover every finite torsion component of the full cyclotomic group; in particular at $p=2$ one cannot infer the action on $\mathbb Q_2(i)$ merely by ignoring the $\{\pm1\}$ factor. The comparison above proves equality of the full reciprocity constructions on their finite abelian $p$-extensions, using (2.4) as input.


## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic extensions]]

## Notes

Original statement and hint: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 1, printed p. 332, PDF p. 351]. Independent comparison using the source theorem V (2.4), printed pp. 330–332, PDF pp. 349–351, and the reciprocity definition IV (5.6). As in IV §5 Exercise 2, the $p$-class field constructions are made in the pro-$p$ category; a $\mathbb Z_p$-quotient alone does not recover extra prime-to-$p$ information.
