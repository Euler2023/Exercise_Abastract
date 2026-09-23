---
title: "Exercise LA390: Constant Cohomology Dimensions and Fibre Comparison"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - cohomology
  - base-change
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 17, printed p. 446, PDF p. 461"
created: 2026-09-22
---

# Exercise LA390: Constant Cohomology Dimensions and Fibre Comparison

## Problem Statement

> [!question] Exercise 17
> Let $0\to K^0\to K^1\to\cdots\to K^n\to0$ be a complex of finite free modules over a local Noetherian ring $A$ without nilpotent elements. For each prime $\mathfrak p$ of $A$ and module $E$, let $E(\mathfrak p)=E_{\mathfrak p}/\mathfrak pE_{\mathfrak p}$, and similarly let $K(\mathfrak p)$ be the complex localized and reduced mod $\mathfrak p$. For a given integer $i$, assume that
>
> $$
> \dim_{k(\mathfrak p)}H^i(K(\mathfrak p))
> $$
>
> is constant, where $H^i$ is the $i$-th homology of the reduced complex. Show that $H^i(K)$ is free and that we have a natural isomorphism
>
> $$
> H^i(K)(\mathfrak p)\approx H^i(K(\mathfrak p)).
> $$
>
> **Printed hint.** First write $d^i_{(\mathfrak p)}$ for the map induced by $d^i$ on $K^i(\mathfrak p)$. Write
>
> $$
> \dim_{k(\mathfrak p)}\ker d^i_{(\mathfrak p)}
> =\dim_{k(\mathfrak p)}K^i(\mathfrak p)
> -\dim_{k(\mathfrak p)}\operatorname{Im}d^i_{(\mathfrak p)}.
> $$
>
> Then show that the dimensions $\dim_{k(\mathfrak p)}\operatorname{Im}d^i_{(\mathfrak p)}$ and $\dim_{k(\mathfrak p)}\operatorname{Im}d^{i-1}_{(\mathfrak p)}$ must be constant. Then apply Exercise 12.

> [!warning] Source issues: the hint reference and the shared degree convention
> The source really prints “Exercise 12,” whose subject is support and annihilation by an ideal power. The constant-rank splitting result used directly here is **Exercise 16**. Also, the complex preamble on printed p. 445 has inconsistent indices. We use $d^j:K^j\to K^{j+1}$ and $H^j=\ker d^j/\operatorname{Im}d^{j-1}$; the full printed discrepancies are recorded in [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]].

## Hints

> [!hint]- Hint 1
> A matrix minor nonzero modulo the maximal ideal is a unit of the local ring. Consequently the rank at any prime is at least the rank at the maximal ideal.

> [!hint]- Hint 2
> At degree $i$, the sum of the two adjacent differential ranks equals $\operatorname{rank}K^i-\dim H^i(K(\mathfrak p))$. Constancy of this sum forces both ranks to be constant. Apply Exercise 16 to both maps, then restrict a retraction onto the boundaries to the cycles.

## Solution

> [!success]- Independently derived solution
> Let $\mathfrak m$ be the maximal ideal. Extend the complex by zero outside its stated degrees. Put $N=\operatorname{rank}_AK^i$, and write
>
> $$
> r_j(\mathfrak p)=\operatorname{rank}_{k(\mathfrak p)}d^j_{(\mathfrak p)},
> \qquad h_i(\mathfrak p)=\dim_{k(\mathfrak p)}H^i(K(\mathfrak p)).
> $$
>
> Rank-nullity over the residue field gives
>
> $$
> h_i(\mathfrak p)=N-r_i(\mathfrak p)-r_{i-1}(\mathfrak p).
> $$
>
> **Both adjacent ranks are constant.** If $r_j(\mathfrak m)=s>0$, some $s\times s$ minor of $d^j$ is nonzero modulo $\mathfrak m$. Its determinant is a unit of $A$, so remains nonzero over every $k(\mathfrak p)$. Thus $r_j(\mathfrak p)\geq r_j(\mathfrak m)$; the same inequality is automatic for $s=0$. Constancy of $h_i$ gives
>
> $$
> \bigl(r_i(\mathfrak p)-r_i(\mathfrak m)\bigr)
> +\bigl(r_{i-1}(\mathfrak p)-r_{i-1}(\mathfrak m)\bigr)=0.
> $$
>
> Both summands are nonnegative integers, so both vanish for every $\mathfrak p$.
>
> **Split cycles and boundaries.** Apply Exercise 16, proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA389 - Constant Rank Maps over Reduced Local Rings|Exercise LA389]], to $d^i$ and $d^{i-1}$. Set $Z=\ker d^i$ and $B=\operatorname{Im}d^{i-1}$. We obtain that $Z$ and $B$ are finite free, and that both are direct summands of $K^i$. Choose a retraction $\rho:K^i\to B$. Since $B\subseteq Z$, the restriction $\rho|_Z$ is a retraction. Therefore
>
> $$
> Z=B\oplus T,\qquad H^i(K)\cong T.
> $$
>
> The module $T$ is a finite direct summand of the finite free module $Z$, so it is free by the local direct-summand lemma proved in Exercise LA389.
>
> **The natural comparison map.** The splittings supplied for $d^i$ identify, after tensoring with $k(\mathfrak p)$,
>
> $$
> Z\otimes_Ak(\mathfrak p)=\ker d^i_{(\mathfrak p)}.
> $$
>
> Indeed, $K^i=Z\oplus C$ with $d^i$ an isomorphism from $C$ onto its image, and that image is a direct summand of $K^{i+1}$. Likewise the splittings for $d^{i-1}$ identify $B\otimes_Ak(\mathfrak p)$ with $\operatorname{Im}d^{i-1}_{(\mathfrak p)}$. Tensoring $Z=B\oplus T$ now gives
>
> $$
> H^i(K)\otimes_Ak(\mathfrak p)
> \cong
> \frac{\ker d^i_{(\mathfrak p)}}{\operatorname{Im}d^{i-1}_{(\mathfrak p)}}
> =H^i(K(\mathfrak p)).
> $$
>
> On representatives the map is $[z]\otimes a\mapsto[z\otimes a]$, which is the canonical comparison map. Its definition is independent of the chosen complements and commutes with chain maps, so the resulting isomorphism is natural.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA389 - Constant Rank Maps over Reduced Local Rings|Exercise LA389]]

## Notes

- **Source status:** The entire statement and printed hint were checked at [S2, Ch. X, Ex. 17, printed p. 446, PDF p. 461]. The preceding complex conventions were checked at printed p. 445, PDF p. 460. The proof is independent.
- **Hypothesis use:** Locality compares all fibre ranks with the rank at one maximal ideal. Reducedness enters through Exercise 16. No semicontinuity theorem or geometric base-change theorem is assumed.
- **Scope:** Constancy is needed only for the specified cohomology degree; it is not assumed for every degree of the complex.
