---
title: "Exercise LA589: Lifting Weak Semisimplicity over a DVR"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - discrete-valuation-rings
  - paper-adaptation
source: "Adapted from Yifeng Liu, Yichao Tian, Liang Xiao, Wei Zhang, and Xinwen Zhu, On the Beilinson–Bloch–Kato conjecture for Rankin–Selberg motives (2022), §2.1, Lemma 2.1.5, printed pp. 122–123, PDF pp. 16–17; Lemma 2.1.3, printed p. 121, PDF p. 15"
paper_refs:
  - "paper/liu-tian-xiao-zhang-zhu-2022/lemma-2.1.5"
  - "paper/liu-tian-xiao-zhang-zhu-2022/lemma-2.1.3"
created: 2026-10-26
---

# Exercise LA589: Lifting Weak Semisimplicity over a DVR

## Problem Statement

> [!question] Adapted proof exercise
> Let $R$ be a discrete valuation ring with uniformizer $\pi$, fraction field $F$, and residue field $k=R/\pi R$. Let $M$ be a finite free $R$-module and $T\in\operatorname{Aut}_R(M)$. Write
> $$
> S=T-I,\qquad K=\ker S,\qquad C=M/SM,\qquad
> M_F=M\otimes_R F,\qquad \bar M=M/\pi M.
> $$
> Let $T_F$ and $\bar T$ be the induced automorphisms. Assume both that
> $$
> \bar M^{\bar T}\longrightarrow\bar M_{\bar T}
> \text{ is an isomorphism},\qquad
> \dim_F M_F^{T_F}\ge\dim_k\bar M^{\bar T}.
> $$
>
> **(a)** Prove that $K$ is saturated in $M$, that $K$ and $M/K$ are finite free, and that reduction induces an injection
> $$
> K/\pi K\hookrightarrow\bar M^{\bar T}.
> $$
> Deduce the reverse dimension inequality $\dim_F M_F^{T_F}\le\dim_k\bar M^{\bar T}$, and therefore equality under the stated hypothesis.
>
> **(b)** Prove that the injection in (a) is an isomorphism and identify
> $$
> C/\pi C\cong\bar M_{\bar T}.
> $$
> Use Nakayama's lemma to prove that $K\to C$ is surjective. Deduce that it is an isomorphism, that $M=K\oplus SM$, and that $C$ is free.
>
> **(c)** Show that the dimension hypothesis cannot be removed by computing every relevant map for $R=\mathbb Z_5$, $M=R^2$, and
> $$
> T=\operatorname{diag}(1,1+5)=\begin{pmatrix}1&0\\0&6\end{pmatrix}.
> $$
> Here $\operatorname{diag}(a,b)$ denotes the diagonal matrix with diagonal entries $a,b$.
>
> **(d)** Let $J_2(1)$ denote the **Jordan block of size $2$ with eigenvalue $1$**:
> $$
> J_2(1)=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
> $$
> The letter $J$ refers to Jordan, and the subscript $2$ specifies the $2\times2$ matrix size. Show that residual weak semisimplicity cannot be replaced by the dimension equality alone by taking $R=\mathbb Z_5$, $M=R^2$, and $T=J_2(1)$.

## Hints

> [!hint]- Hint 1
> If $\pi m\in K$, then $\pi Sm=0$ in a torsion-free module. Use the structure theorem over the PID $R$ on the resulting torsion-free quotient. An invariant vector over $F$ can be multiplied by a common denominator to give an element of $K$.

> [!hint]- Hint 2
> The composite $K/\pi K\to\bar M^{\bar T}\to\bar M_{\bar T}\cong C/\pi C$ is an isomorphism. Apply Nakayama to the cokernel of $K\to C$, then use the Noetherian result of LA588. For the diagonal counterexample, $SM=5Re_2$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent algebraic derivation of the lifting statement in Lemma 2.1.5. Imported module-theoretic inputs are the structure theorem for finite modules over a PID and Nakayama's lemma, stated at the point of use. LA588 supplies the proved Noetherian comparison criterion.
>
> **(a) Saturation and reduction.** If $\pi m\in K$, then
> $$
> 0=S(\pi m)=\pi Sm.
> $$
> Since the free module $M$ is torsion-free, $Sm=0$, so $m\in K$. Repeating this implication for powers of $\pi$ shows that $K$ is saturated: if $0\ne a\in R$ and $am\in K$, then $m\in K$, because every such $a$ is a unit times a power of $\pi$. Thus $M/K$ is torsion-free.
>
> A DVR is a Noetherian PID. The submodule $K$ of the finite free module $M$ is finitely generated and torsion-free; so is the quotient $M/K$. The PID structure theorem says that every finite torsion-free module over a PID is free. Therefore both modules are finite free. Lifting a basis of $M/K$ also splits the quotient map, although its complement need not be $T$-stable at this stage.
>
> Saturation gives $K\cap\pi M=\pi K$: if $x=\pi m\in K$, then $m\in K$. This proves that $K/\pi K\to M/\pi M$ is injective. Its image is contained in $\ker(\bar T-I)$ because $S$ vanishes on $K$.
>
> Moreover,
> $$
> K\otimes_R F=\ker(S\otimes_R F)=M_F^{T_F}.
> $$
> Indeed, the inclusion from left to right follows by applying $S$. Conversely, for $v\in M_F$ with $Sv=0$, write $v=m/a$ with $m\in M$ and $0\ne a\in R$. Then $Sm$ is zero in $M_F$ and hence in the torsion-free module $M$, so $m\in K$. Consequently
> $$
> \dim_F M_F^{T_F}=\operatorname{rank}_R K
> =\dim_k K/\pi K\le\dim_k\bar M^{\bar T}.
> $$
> The assumed opposite inequality makes every inequality here an equality.
>
> **(b) Lift the comparison map.** The injection in (a) is now a map between finite-dimensional spaces of the same dimension, hence an isomorphism. The quotient description gives
> $$
> C/\pi C=M/(SM+\pi M)
> \cong\bar M/(\bar T-I)\bar M=\bar M_{\bar T}.
> $$
> The reduction of the natural map $q:K\to C$ is the composite
> $$
> K/\pi K\xrightarrow{\ \sim\ }\bar M^{\bar T}
> \xrightarrow{\ \sim\ }\bar M_{\bar T}
> \xrightarrow{\ \sim\ }C/\pi C.
> $$
> The middle arrow is an isomorphism by the separate residual weak-semisimplicity hypothesis. In particular, $C=q(K)+\pi C$. Set $Q=C/q(K)$, a finitely generated $R$-module. The last equality gives $Q=\pi Q$. Nakayama's lemma states that a finite module $Q$ over a local ring with maximal ideal $\mathfrak m$ is zero if $Q=\mathfrak m Q$. Applying it with $\mathfrak m=(\pi)$ yields $Q=0$, so $q$ is surjective.
>
> Because $R$ is Noetherian and $M$ is finite, $M$ is a Noetherian module. Applying [[04 - Linear Algebra and Modules/Exercises/Exercise LA588 - Invariants and Coinvariants of an Automorphism|LA588(b)]] to $S$ now gives
> $$
> K\xrightarrow{\ \sim\ }C,\qquad M=K\oplus SM.
> $$
> Since $K$ is free, $C$ is free. Thus $(M,T)$ is weakly semisimple and the generic and residual invariant dimensions agree. The argument needs no completeness assumption on $R$.
>
> **(c) A new fixed vector after reduction.** For $T=\operatorname{diag}(1,6)$ on $\mathbb Z_5^2$,
> $$
> S=\operatorname{diag}(0,5),\qquad K=Re_1,\qquad SM=5Re_2,
> $$
> so
> $$
> C\cong Re_1\oplus(R/5R)\bar e_2.
> $$
> The map $K\to C$ is $ae_1\mapsto(a,0)$ and misses the nonzero torsion summand. Thus $(M,T)$ is not weakly semisimple. However, $\bar T=I$ on $k^2$, so both residual invariants and coinvariants equal $k^2$, and their natural map is the identity. Over $F=\mathbb Q_5$, the invariant space is only $Fe_1$. Hence
> $$
> \dim_F M_F^{T_F}=1<2=\dim_k\bar M^{\bar T}.
> $$
> Residual weak semisimplicity holds, but the dimension hypothesis fails and so does the conclusion. This is also an explicit example in which invariants do not commute with reduction.
>
> **(d) Equal dimensions with a defective comparison map.** For $T=J_2(1)$,
> $$
> S=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
> K=Re_1,\qquad SM=Re_1,\qquad C=R\bar e_2.
> $$
> The natural comparison $K\to C$ is zero. After extending scalars to $F$ and after reducing to $k$, the respective invariant spaces are $Fe_1$ and $ke_1$, both one-dimensional. The dimension equality therefore holds. The residual coinvariants are $k\bar e_2$, and the residual comparison map is zero, so residual weak semisimplicity fails. The integral conclusion fails as well. Equality of the dimensions cannot replace the comparison-map hypothesis.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Invariants Coinvariants and Weak Semisimplicity|Invariants, Coinvariants, and Weak Semisimplicity]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules and Nakayama's Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Notes

- **Source and adaptation status:** The hypotheses, statement, and proof of Lemma 2.1.5 were checked on 200 dpi renderings of the original PDF [Liu–Tian–Xiao–Zhang–Zhu, §2.1, printed pp. 122–123, PDF pp. 16–17]. The Noetherian comparison result is Lemma 2.1.3 [printed p. 121, PDF p. 15]. The paper proves these lemmas; the multipart task, saturation argument, and counterexamples here are an independently composed exercise.
- **Change of setting:** The paper uses a continuous procyclic action on a finite free $\mathcal O_\lambda$-module, with $\mathcal O_\lambda$ the integer ring of a finite extension of $\mathbb Q_\ell$. This exercise isolates the algebra for an automorphism over any DVR. It does not assert that every DVR or automorphism arises from that arithmetic setting.
- **Hypothesis boundary:** Both residual weak semisimplicity and the stated dimension inequality are retained. Parts (c) and (d) prove separately that deleting either condition can invalidate the conclusion. Residual equality of invariant and coinvariant dimensions is not the same as residual weak semisimplicity.
- **Verification scope:** The examples are verified by their displayed matrices, kernels, images, and quotients. No numerical approximation to $5$-adic numbers is used.
- **Routing:** Module Theory is primary because saturation, finite free modules over a PID, reduction, and Nakayama's lemma supply the proof; no Selmer-group or motivic input is used.
