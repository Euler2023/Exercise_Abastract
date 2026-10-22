---
title: Higher Ramification Groups and Herbrand Functions
aliases:
  - Higher Ramification Groups
  - Herbrand Function
  - Upper Numbering
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, (10.1)–(10.9), printed pp. 176–181, PDF pp. 195–200"
source_status: verified-bounded
---

# Higher Ramification Groups and Herbrand Functions

## Definition

> [!info] Lower and upper ramification numbering
> For a finite Galois extension $L/K$ with a unique extension of a discrete valuation, normalize $v_L(L^*)=\mathbb Z$. For real $s\ge-1$ put
> $$
> G_s=\{\sigma:v_L(\sigma x-x)\ge s+1\text{ for all }x\in\mathcal O_L\}.
> $$
> For $s\ge0$ let $\varphi(s)=\int_0^s[G_0:G_t]^{-1}dt$, with inverse $\psi$ and the usual identity extension on $[-1,0]$. Set $G^u=G_{\psi(u)}$.

## Intuition

Lower indices measure how many powers of the maximal ideal an automorphism fixes. Upper indices rescale time so that quotient extensions inherit the same parameter.

## Key Properties

- $G_{-1}=G$, $G_0$ is inertia, and $G_1$ is wild inertia when the residue characteristic is positive and the usual separable residue hypotheses hold.
- For $H=\operatorname{Gal}(L/K')$, lower numbering satisfies $H_s=H\cap G_s$.
- Upper subgroup numbering requires reparameterization: $H^u=H\cap G^{\varphi_G(\psi_H(u))}$.
- If $H$ is normal, upper numbering is quotient compatible: $(G/H)^u=G^uH/H$.
- In the finite henselian discrete setting with separable residue extension, the different exponent is $\sum_{i\ge0}(|G_i|-1)$.

## Examples

For $L=\mathbb Q_p(\zeta_{p^n})$, a nonidentity $\sigma_a:\zeta\mapsto\zeta^a$ has $i_G(\sigma_a)=p^{v_p(a-1)}$. This gives the jumps at $p^r-1$. The full derivation and real-index endpoints are in the linked exercises.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §10, (10.1)–(10.9), printed pp. 176–181, PDF pp. 195–200. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.
