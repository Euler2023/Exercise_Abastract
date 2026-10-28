---
title: "Exercise AG140: Supersingular Quotients and Frobenius Twists"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.7, Exercise 8.7.1, printed p. 359, PDF p. 372"
source_refs:
  - "S7/ch-8/sec-7/ex-1"
created: 2026-10-28
---

# Exercise AG140: Supersingular Quotients and Frobenius Twists

## Problem Statement

> [!question] Original Exercise 8.7.1
> Let $E/\overline{\mathbb Q}$ have supersingular reduction at $\mathfrak p$, and let $Q\in E$ have order $N$. Extend Lemma 8.7.1 to show that for every order-$p$ subgroup $C\subset E$,
> $$
> [\widetilde{E/C},\widetilde{Q+C}]=[\widetilde E^{\sigma_p},\widetilde Q^{\sigma_p}]
> =[\widetilde E^{\sigma_p^{-1}},[p]\widetilde Q^{\sigma_p^{-1}}].
> $$
> (A hint for this exercise is at the end of the book.)

> **Context and notation.** The section assumes $p\nmid N$. The symbol $\sigma_p$ denotes coefficientwise $p$th-power Frobenius; its inverse exists on $\overline{\mathbb F}_p$. A pair $[E,Q]$ is considered up to an origin-preserving isomorphism carrying the marked point to the marked point. Lemma 8.7.1 treats ordinary reduction; the desired extension treats supersingular reduction.

## Hints

> [!hint]- Hint 1
> The reduced degree-$p$ quotient has trivial geometric kernel on a supersingular curve, so it is purely inseparable.

> [!hint]- Hint 2
> Factor the quotient and its dual through Frobenius, then twist the second factorization by inverse Frobenius.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Restore the section hypothesis $p\nmid N$. Put $E'=E/C$, $\varphi:E\to E'$ the quotient, and $\psi:E'\to E$ its dual. After a finite algebraic extension these maps and the good models may be defined at the chosen prime. The good-reduction theorem for isogenous elliptic curves (Proposition 8.4.4 and Theorem 8.5.10) gives good reduction of $E'$, reduced isogenies of degree $p$, and
> $$
> \widetilde\psi\widetilde\varphi=[p]_{\widetilde E},\qquad
> \widetilde\varphi\widetilde\psi=[p]_{\widetilde E'}.
> $$
> Let $Q'=\varphi(Q)$. Then $\widetilde\varphi(\widetilde Q)=\widetilde{Q'}$ and $\widetilde\psi(\widetilde{Q'})=[p]\widetilde Q$.
>
> Supersingularity means the geometric group $\widetilde E[p]$ is trivial. If $R$ is in the geometric kernel of $\widetilde\varphi$, the first dual identity implies $[p]R=0$, so $R=0$. The separable degree of an isogeny is the number of its geometric kernel points. Therefore $\widetilde\varphi$ has separable degree one and inseparable degree $p$. The Frobenius factorization theorem for morphisms of smooth curves over a perfect field now gives
> $$
> \widetilde\varphi=i\circ\sigma_p,\qquad i:\widetilde E^{\sigma_p}\xrightarrow{\sim}\widetilde E'.
> $$
> Evaluating at $\widetilde Q$ shows $i(\widetilde Q^{\sigma_p})=\widetilde{Q'}$, proving the first enhanced-curve equivalence. In particular $\widetilde E'$ is also supersingular, since it is isomorphic to the Frobenius twist of $\widetilde E$.
>
> The same argument applied to $\widetilde\psi$ gives $\widetilde\psi=j\circ\sigma_p$ with $j:(\widetilde E')^{\sigma_p}\xrightarrow{\sim}\widetilde E$ and $j((\widetilde{Q'})^{\sigma_p})=[p]\widetilde Q$. Conjugate all its coefficients by the inverse automorphism $\sigma_p^{-1}$ of $\overline{\mathbb F}_p$. This produces an isomorphism
> $$
> j^{\sigma_p^{-1}}:\widetilde E'\xrightarrow{\sim}\widetilde E^{\sigma_p^{-1}},\qquad
> \widetilde{Q'}\longmapsto[p]\widetilde Q^{\sigma_p^{-1}}.
> $$
> It proves the second equivalence. The order remains $N$ throughout because prime-to-$p$ reduction is injective and multiplication by $p$ is invertible on $N$-torsion. The conclusion applies to every $C$, since no particular lift of a geometric subgroup was chosen.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 359 / PDF p. 372. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Restored hypothesis:** The prime-to-level condition $p\nmid N$ comes from the beginning of Section 8.7 and ensures that each displayed marked point retains exact order $N$.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
