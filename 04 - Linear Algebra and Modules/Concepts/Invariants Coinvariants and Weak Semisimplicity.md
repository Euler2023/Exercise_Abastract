---
title: Invariants Coinvariants and Weak Semisimplicity
aliases:
  - Invariants and Coinvariants of an Automorphism
  - Weak Semisimplicity
  - Weakly Semisimple Automorphisms
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - invariants
created: 2026-10-26
status: not-started
source: "Yifeng Liu, Yichao Tian, Liang Xiao, Wei Zhang, and Xinwen Zhu, On the Beilinson–Bloch–Kato conjecture for Rankin–Selberg motives (2022), §2.1, Definition 2.1.2 and Lemma 2.1.3, printed p. 121, PDF p. 15; Lemma 2.1.5, printed pp. 122–123, PDF pp. 16–17"
paper_refs:
  - "paper/liu-tian-xiao-zhang-zhu-2022/definition-2.1.2"
  - "paper/liu-tian-xiao-zhang-zhu-2022/lemma-2.1.3"
  - "paper/liu-tian-xiao-zhang-zhu-2022/lemma-2.1.5"
source_status: verified-with-adaptation
---

# Invariants, Coinvariants, and Weak Semisimplicity

## Definition

> [!info] Invariants and coinvariants
> Let $R$ be a commutative ring, let $M$ be an $R$-module, and let $T\in\operatorname{Aut}_R(M)$. With $S=T-I$, define
> $$
> M^T=\ker(T-I),\qquad M_T=M/(T-I)M.
> $$
> The **invariants** consist of the vectors fixed by $T$. The **coinvariants** form the largest quotient of $M$ on which the induced $T$ is the identity: any $R$-linear map $f:M\to N$ satisfying $fT=f$ kills $(T-I)M$ and factors uniquely through $M_T$.

> [!info] Weak semisimplicity
> The natural map
> $$
> q:M^T\longrightarrow M_T,\qquad x\longmapsto x+(T-I)M,
> $$
> need not be an isomorphism. Call $(M,T)$ **weakly semisimple** when it is. This is the automorphism form of the paper's definition for continuous procyclic actions, rather than a claim that $M$ is a semisimple $R$-module.

## Intuition

Invariants describe actual fixed vectors inside $M$. Coinvariants force every displacement $Tx-x$ to vanish in a quotient. The comparison map asks whether each quotient class has a unique fixed-vector representative. Its injectivity and surjectivity are concrete conditions:

$$
\ker q=\ker S\cap SM,\qquad
q\text{ surjective}\Longleftrightarrow M=\ker S+SM.
$$

Thus weak semisimplicity means that fixed vectors and displacements give the direct sum $M=\ker S\oplus SM$. Over a field this forbids nontrivial Jordan blocks at the eigenvalue $1$, while allowing Jordan blocks at other eigenvalues.

## Key Properties

### The Noetherian comparison criterion

If $M$ is Noetherian, a surjective comparison map is automatically an isomorphism. Indeed, $M=\ker S+SM$ implies $SM=S^2M$. Hence $S:SM\to SM$ is a surjective endomorphism of a Noetherian module, so is injective. This gives $\ker S\cap SM=0$ and the direct sum above. In particular, $S$ is invertible on $SM$. Also, $M_T=0$ implies $M^T=0$ by applying the same surjective-endomorphism result to $S:M\to M$.

For completeness, the surjective-endomorphism result follows from stabilization of $\ker f^n$. If $f$ is surjective and $\ker f^n=\ker f^{n+1}$, any $x\in\ker f$ can be written $f^ny$; then $f^{n+1}y=0$ forces $f^ny=0$, and hence $x=0$. A full multipart derivation is given in [[04 - Linear Algebra and Modules/Exercises/Exercise LA588 - Invariants and Coinvariants of an Automorphism|LA588]].

### Finite-dimensional vector spaces

For finite-dimensional $M$ over a field, rank-nullity always gives $\dim M^T=\dim M_T$, even when $q$ is zero. Equality of dimensions therefore does not establish weak semisimplicity.

Here $J_r(a)$ denotes the **Jordan block of size $r$ with eigenvalue $a$**, for $r\ge1$: its entries are

$$
(J_r(a))_{ij}=
\begin{cases}
a,&i=j,\\
1,&j=i+1,\\
0,&\text{otherwise}.
\end{cases}
$$

The letter $J$ refers to Jordan, and the subscript $r$ records the matrix size. In particular, $J_1(a)=(a)$ and $J_2(a)=\begin{pmatrix}a&1\\0&a\end{pmatrix}$. The notation $\operatorname{diag}(B_1,\ldots,B_s)$ means the block diagonal matrix with the indicated square blocks and zeros outside them.

If the characteristic polynomial of $T$ splits, use Jordan form. On a block $J_r(a)$ with $a\ne1$, $T-I$ has nonzero determinant $(a-1)^r$, so it contributes neither invariants nor coinvariants. A block $J_1(1)$ contributes an identity comparison between two one-dimensional spaces. A block $J_r(1)$ with $r>1$ has invariant vector $e_1$ lying in $(T-I)M$, so its comparison map is zero between nonzero one-dimensional spaces. Thus weak semisimplicity holds exactly when every block at $1$ has size $1$.

### Lifting from a residue field

Let $R$ be a DVR with uniformizer $\pi$, fraction field $F$, and residue field $k$. Let $M$ be finite free and $T$ an automorphism. If both

$$
(M/\pi M)^{\bar T}\longrightarrow(M/\pi M)_{\bar T}
\text{ is an isomorphism}
$$

and

$$
\dim_F(M\otimes_R F)^{T_F}
\ge\dim_k(M/\pi M)^{\bar T}
$$

hold, then $M^T\to M_T$ is an isomorphism and the displayed dimensions are equal. The invariant kernel is saturated, so its reduction injects into residual invariants. The dimension hypothesis makes that injection an isomorphism. Residual weak semisimplicity then makes the integral comparison surjective modulo $\pi$; Nakayama's lemma and the Noetherian criterion finish the proof. The full saturation, quotient, and lifting arguments are supplied in [[04 - Linear Algebra and Modules/Exercises/Exercise LA589 - Lifting Weak Semisimplicity over a DVR|LA589]].

## Examples

> [!example] Weak semisimplicity without diagonalizability
> Over $\mathbb Q$, $T=\operatorname{diag}(1,J_2(2))$ has invariant space $\mathbb Qe_1$ and displacement space $\mathbb Qe_2\oplus\mathbb Qe_3$, because $J_2(2)-I$ is invertible. Its comparison is an isomorphism, but its two-dimensional $2$-block has only a one-dimensional eigenspace, so $T$ is not diagonalizable.

> [!example] A Jordan block at $1$
> For $T=J_2(1)$ on $\mathbb Q^2$, invariants and displacements both equal $\mathbb Qe_1$. The coinvariant quotient has basis $\bar e_2$, so the comparison map is zero. Its source and target have equal dimensions, yet it is not an isomorphism.

> [!example] Residual weak semisimplicity alone does not lift
> For $M=\mathbb Z_5^2$ and $T=\operatorname{diag}(1,6)$, the residual operator is the identity, but
> $$
> M^T=\mathbb Z_5e_1,\qquad
> M_T\cong\mathbb Z_5\oplus\mathbb F_5.
> $$
> The natural map misses the torsion summand. The generic invariant dimension is $1$, whereas the residual invariant dimension is $2$. This violates precisely the dimension hypothesis of the lifting result.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules and Nakayama's Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology and Standard Resolutions]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Definition 2.1.2, Lemma 2.1.3, and Lemma 2.1.5, including their proofs, were checked against 200 dpi renderings of the original PDF [Liu–Tian–Xiao–Zhang–Zhu, §2.1, printed pp. 121–123, PDF pp. 15–17]. The paper defines weak semisimplicity for finite modules over specified $\ell$-adic coefficient rings with continuous group actions, and the lemmas here assume $\Gamma\cong\widehat{\mathbb Z}$. Choosing a topological generator produces the operator $T$ used in this note.

This note explicitly isolates and proves the algebraic statements for automorphisms of Noetherian modules and finite free modules over a DVR. These broader algebraic formulations and the examples are independent derivations, not verbatim statements of the paper. No assertion is made that an arbitrary automorphism extends to a continuous action of $\widehat{\mathbb Z}$. The Jordan characterization imports Jordan canonical form; the lifting proof imports the PID structure theorem and Nakayama's lemma. No theorem about Selmer groups, Rankin–Selberg motives, or the Beilinson–Bloch–Kato conjecture is proved or required here.
