---
title: 'Exercise Gal169: Dworks Formula and the Reciprocity Sign Convention'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 1, printed p. 298, PDF p. 317
source_refs:
- S4/ch-IV/sec-5/ex-1
created: '2026-10-23'
---

# Exercise Gal169: Dworks Formula and the Reciprocity Sign Convention

## Problem Statement

> [!question] Neukirch IV.5.1
> Let $L|K$ be abelian and totally ramified, and let $\pi$ be a prime element of $A_L$. If then $\sigma\in G(L|K)$ and
> $$
> y^{\varphi-1}=\pi^{\sigma-1}
> $$
> with $y\in U_{\widetilde L}$, then $r_{L|K}(\sigma)=N(y)\bmod N_{L|K}A_L$, where $N=N_{\widetilde L|\widetilde K}$ (B. Dwork, see [122], chap. XIII, §5).

> [!warning] Source issue
> The direction of the printed formula disagrees with the normalization $r(\varphi)=\pi$ in the main text. The derivation below gives $r(\sigma)=N(y)^{-1}$ from the definitions in the text and states the corrected equation needed to retain the positive sign. The printed formula is not assumed to be proved.

## Hints

> [!hint]- Hint 1
> Check the direction using the normalization $r(\varphi)=\pi$ in the text. Take the fixed field $E$ of $\tau=\sigma\varphi$ and a prime element $\pi_E$.

> [!hint]- Hint 2
> Put $u=\pi_E/\pi$. In the $G(L/K)$-coinvariants of $U_{\widetilde L}$, the class $[uy]$ is fixed by $\varphi$, so (5.4) of the main text applies.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Retain the notation of the text: $\widetilde K$ is the maximal unramified extension, $\widetilde L=L\widetilde K$, and $\varphi$ is the Frobenius of $\widetilde L/L$. Total ramification and commutativity give
> $$
> G(\widetilde L/K)\simeq G(L/K)\times G(\widetilde K/K),
> $$
> Thus $\sigma,\varphi$ may be chosen as commuting lifts. The given equation first implies
> $$
> N(y)^{\varphi-1}=N(\pi^{\sigma-1})=1,
> $$
> Hence $N(y)\in A_K$, so its residue class is well-defined.
>
> We now derive the formula directly from (5.2), (5.4), and (5.6) of the text, tracking the inverse. Put $\tau=\sigma\varphi$ and let $E$ be its fixed field. We have $d_K(\tau)=1$; by (4.5), $E/K$ is finite, $\widetilde E=\widetilde L$, and $\tau$ is the Frobenius of $E$. Choose a prime element $\pi_E\in A_E$ and put $u=\pi_E/\pi\in U_{\widetilde L}$. Since $\pi_E^\tau=\pi_E$ and $\pi^\varphi=\pi$,
> $$
> u^{\tau-1}=\pi^{1-\sigma}=y^{1-\varphi}.
> $$
> The action of $\sigma$ on $U_{\widetilde L}/I_{G(L/K)}U_{\widetilde L}$ is trivial, so $\tau$ and $\varphi$ act identically there, giving $[uy]^{\varphi-1}=1$. Lemma (5.4), proved in the main text, therefore yields $N(uy)\in N_{L/K}A_L$. On the other hand, $E\widetilde K=\widetilde L$ and $E\cap\widetilde K=K$, so
> $$
> N(u)=\frac{N_{E/K}(\pi_E)}{N_{L/K}(\pi)}
> \equiv r_{L/K}(\sigma)\pmod{N_{L/K}A_L}.
> $$
> Consequently
> $$
> r_{L/K}(\sigma)\equiv N(y)^{-1}\pmod{N_{L/K}A_L}.
> $$
> This is the inverse of the printed expression. With the arithmetic Frobenius normalization $r(\varphi)=\pi$ of the main text, the formula must be corrected as above. Equivalently, to retain the printed conclusion $r(\sigma)=N(y)$, replace the condition by $y^{\varphi-1}=\pi^{1-\sigma}$. Reversing the Frobenius normalization of the entire reciprocity map also reverses the result, but requires changing the definitions in the main text as well, rather than silently changing this exercise alone.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Unramified Extensions and Frobenius]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Coinvariants and Norms]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 1, printed p. 298, PDF p. 317]. The printed equation and conclusion are retained in full. The argument independently checks the direction using the proved lemma (5.4) and definitions (5.2)/(5.6), at printed pp. 291–295 / PDF pp. 310–314. The cited reference [122] was not separately checked; no claim is made that it uses the same normalization as this book.
- **Convention:** If left and right actions or geometric Frobenius conventions differ between source passages, reconcile them explicitly before invoking this exercise. This solution treats $\sigma,\varphi$ as the actual automorphisms used in the main text.
