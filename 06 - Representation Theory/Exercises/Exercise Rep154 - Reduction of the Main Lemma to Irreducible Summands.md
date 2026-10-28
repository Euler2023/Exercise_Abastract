---
title: "Exercise Rep154: Reduction of the Main Lemma to Irreducible Summands"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.6, printed p. 195, PDF p. 209"
source_refs:
  - "S7/ch-5/sec-7/ex-6"
created: 2026-10-28
---

# Exercise Rep154: Reduction of the Main Lemma to Irreducible Summands

## Problem Statement

> [!question] Original Exercise 5.7.6
> Show that Proposition 5.7.7 implies condition (5.17). (A hint for this exercise is at the end of the book.)
>
> Proposition 5.7.7 states that for an irreducible complex representation $W$ of the finite product $G=\prod_iG_i$, and subgroups $H=\prod_iH_i$, $K_i\subset G_i$ embedded in $G$,
> $$
> W^H\cap\sum_iW^{K_i}=\sum_iW^{\langle H,K_i\rangle}.
> $$
> Condition (5.17) is the same equality for $V=S_k(\Gamma(N))$.

## Hints

> [!hint]- Hint 1
> Decompose the finite-dimensional representation $V$ into irreducibles using Maschke's theorem over $\mathbb C$.

> [!hint]- Hint 2
> In an invariant direct-sum decomposition, fixed spaces, sums, and the relevant intersection can all be computed component by component.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The space $V=S_k(\Gamma(N))$ is finite dimensional, and $G=\mathrm{SL}_2(\mathbb Z/N\mathbb Z)$ is finite. Maschke's theorem applies because the characteristic of $\mathbb C$ does not divide $|G|$. For completeness, if $U\subset V$ is invariant, choose a linear projection $P:V\to U$ which is identity on $U$. Averaging its conjugates,
> $$
> P_G=\frac1{|G|}\sum_{g\in G}\rho(g)P\rho(g)^{-1},
> $$
> gives an equivariant projection onto $U$. Its kernel is an invariant complement. Induction on dimension produces $V=\bigoplus_{a=1}^rW_a$ with each $W_a$ irreducible. For a right representation one may first replace the action by $g\mapsto\rho(g^{-1})$; fixed spaces do not change.
>
> For every subgroup $J\subset G$, writing $v=\sum_aw_a$ uniquely, invariance of each $W_a$ shows $jv=v$ if and only if $jw_a=w_a$ for every $a,j$. Therefore $V^J=\bigoplus_aW_a^J$. Finiteness of the sums now gives
> $$
> \sum_i V^{K_i}=\bigoplus_a\left(\sum_iW_a^{K_i}\right),\qquad
> V^H\cap\sum_iV^{K_i}=\bigoplus_a\left(W_a^H\cap\sum_iW_a^{K_i}\right).
> $$
> Apply Proposition 5.7.7 to every irreducible $W_a$ and rearrange the finite sums:
> $$
> \bigoplus_a\sum_iW_a^{\langle H,K_i\rangle}
> =\sum_i\bigoplus_aW_a^{\langle H,K_i\rangle}
> =\sum_iV^{\langle H,K_i\rangle}.
> $$
> This is condition (5.17). The proposition is used only for irreducibles; the preceding argument proves the required extension to the full cusp space.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory]]
- [[01 - Group Theory/Concepts/Group Actions]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.6, printed p. 195 / PDF p. 209]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked inputs:** Proposition 5.7.7 and condition (5.17) are on printed p.194/PDF p.208. The appendix hint on printed p.423/PDF p.434 invokes the irreducible direct-sum decomposition; its finite-group averaging proof is supplied above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
