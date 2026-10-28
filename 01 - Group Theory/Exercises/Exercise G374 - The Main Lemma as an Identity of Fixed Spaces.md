---
title: "Exercise G374: The Main Lemma as an Identity of Fixed Spaces"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.7, Exercise 5.7.5, printed p. 195, PDF p. 209"
source_refs:
  - "S7/ch-5/sec-7/ex-5"
created: 2026-10-28
---

# Exercise G374: The Main Lemma as an Identity of Fixed Spaces

## Problem Statement

> [!question] Original Exercise 5.7.5
> Use Lemma 5.7.6 to explain why Theorem 5.7.5 rephrases as condition (5.17). (A hint for this exercise is at the end of the book.)
>
> Theorem 5.7.5 states
> $$
> S_k(\Gamma^1(N))\cap\sum_{p\mid N}S_k(\Gamma_1(N)\cap\Gamma^0(N/p))=\sum_{p\mid N}S_k(\Gamma^1(N/p)).
> $$
> Write $N=\prod_{i=1}^n p_i^{e_i}$, $G=\mathrm{SL}_2(\mathbb Z/N\mathbb Z)=\prod_iG_i$, $G_i=\mathrm{SL}_2(\mathbb Z/p_i^{e_i}\mathbb Z)$,
> $$
> H_i=\Gamma^1(p_i^{e_i})/\Gamma(p_i^{e_i}),\quad K_i=(\Gamma_1(p_i^{e_i})\cap\Gamma^0(p_i^{e_i-1}))/\Gamma(p_i^{e_i}),\quad H=\prod_iH_i.
> $$
> Embed each $K_i$ in the $i$th factor of $G$ and put $V=S_k(\Gamma(N))$. Condition (5.17) is
> $$
> V^H\cap\sum_i V^{K_i}=\sum_iV^{\langle H,K_i\rangle}.
> $$
> Lemma 5.7.6 says $\langle\Gamma^1(p^e),\Gamma_1(p^e)\cap\Gamma^0(p^{e-1})\rangle=\Gamma^1(p^{e-1})$.

## Hints

> [!hint]- Hint 1
> For a subgroup $\Gamma$ containing $\Gamma(N)$, identify $V^{\Gamma/\Gamma(N)}$ with $S_k(\Gamma)$.

> [!hint]- Hint 2
> At primes other than $p_i$, the group $\Gamma_1(N)\cap\Gamma^0(N/p_i)$ reduces to the identity. Apply the given lemma at the remaining prime.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The right slash action of $\mathrm{SL}_2(\mathbb Z)$ on $V$ factors through $G$, because its normal subgroup $\Gamma(N)$ acts trivially. If $\Gamma(N)\subset\Gamma\subset\mathrm{SL}_2(\mathbb Z)$, a member of $V$ is fixed by $\Gamma/\Gamma(N)$ exactly when it satisfies the weight-$k$ transformation law for $\Gamma$. Its cusp vanishing for $\Gamma$ follows from that for $\Gamma(N)$: at a given cusp the smaller local parameter is a positive integer power of the larger one, and a function tending to zero still tends to zero. Thus
> $$
> V^{\Gamma/\Gamma(N)}=S_k(\Gamma).
> $$
> By the Chinese remainder isomorphism, $H$ is the image of $\Gamma^1(N)$, giving $V^H=S_k(\Gamma^1(N))$.
>
> For $\Gamma_1(N)\cap\Gamma^0(N/p_i)$, the diagonal entries are $1$ modulo $N$ and the lower-left entry is $0$ modulo $N$. At every $p_j$ with $j\ne i$, its upper-right entry is divisible by $p_j^{e_j}$, so its image there is the identity. At $p_i$, the upper-right entry is divisible by $p_i^{e_i-1}$, so its image is precisely the indicated $K_i$. Hence
> $$
> V^{K_i}=S_k(\Gamma_1(N)\cap\Gamma^0(N/p_i)).
> $$
> To justify “precisely,” reduction $\mathrm{SL}_2(\mathbb Z)\to\mathrm{SL}_2(\mathbb Z/N\mathbb Z)$ is surjective; this is the surjectivity theorem for congruence reduction, imported here. Taking the preimage of the stated congruence conditions gives the displayed integral subgroup.
>
> Finally $\langle H,K_i\rangle$ has components $H_j$ at $j\ne i$ and $\langle H_i,K_i\rangle$ at $i$. Lemma 5.7.6 identifies the latter with the reduction of $\Gamma^1(p_i^{e_i-1})$ modulo $p_i^{e_i}$. Its full preimage in $\mathrm{SL}_2(\mathbb Z)$ is therefore $\Gamma^1(N/p_i)$. This includes $e_i=1$, where that local factor imposes no condition. It follows that
> $$
> V^{\langle H,K_i\rangle}=S_k(\Gamma^1(N/p_i)).
> $$
> Substituting these three identifications gives exactly Theorem 5.7.5. This proves equivalence of the two formulations; it does not presuppose the fixed-space equality being proved.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.7.5, printed p. 195 / PDF p. 209]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked inputs:** Theorem 5.7.5 and the definitions are on printed p.193/PDF p.207; Lemma 5.7.6 and condition (5.17) are on printed p.194/PDF p.208. The appendix hint was checked on printed p.423/PDF p.434.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
