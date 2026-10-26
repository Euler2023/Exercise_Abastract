---
title: "Exercise LA588: Invariants and Coinvariants of an Automorphism"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - invariants
  - paper-adaptation
source: "Adapted from Yifeng Liu, Yichao Tian, Liang Xiao, Wei Zhang, and Xinwen Zhu, On the Beilinson–Bloch–Kato conjecture for Rankin–Selberg motives (2022), §2.1, Definition 2.1.2 and Lemma 2.1.3, printed p. 121, PDF p. 15"
paper_refs:
  - "paper/liu-tian-xiao-zhang-zhu-2022/definition-2.1.2"
  - "paper/liu-tian-xiao-zhang-zhu-2022/lemma-2.1.3"
created: 2026-10-26
---

# Exercise LA588: Invariants and Coinvariants of an Automorphism

## Problem Statement

> [!question] Adapted proof exercise
> Let $R$ be a commutative ring, let $M$ be a Noetherian $R$-module, and let $T\in\operatorname{Aut}_R(M)$. Put $S=T-I$ and define the **invariants**, **coinvariants**, and their natural comparison map by
> $$
> M^T=\ker S,\qquad M_T=M/SM,\qquad
> q:M^T\longrightarrow M_T,\quad x\longmapsto x+SM.
> $$
> Call $(M,T)$ **weakly semisimple** if $q$ is an isomorphism.
>
> **(a)** Prove that every surjective endomorphism of a Noetherian module is injective. Deduce that $M_T=0$ implies $M^T=0$.
>
> **(b)** Prove that surjectivity of $q$ already implies that $q$ is an isomorphism. More precisely, prove the equivalences
> $$
> q\text{ is surjective}
> \quad\Longleftrightarrow\quad M=\ker S\oplus SM
> \quad\Longleftrightarrow\quad q\text{ is an isomorphism}.
> $$
> Show also that $S$ restricts to an automorphism of $SM$ in this situation.
>
> **(c)** For $a\in\mathbb Q$, let $J_2(a)$ denote the **Jordan block of size $2$ with eigenvalue $a$**:
> $$
> J_2(a)=\begin{pmatrix}a&1\\0&a\end{pmatrix}.
> $$
> The letter $J$ refers to Jordan, and the subscript $2$ specifies the $2\times2$ matrix size. Over $\mathbb Q$, determine the invariants, coinvariants, and map $q$ for
> $$
> T_1=J_2(1),\qquad
> T_2=\operatorname{diag}(1,J_2(2))
> =\begin{pmatrix}1&0&0\\0&2&1\\0&0&2\end{pmatrix},
> $$
> where $\operatorname{diag}(1,J_2(2))$ means the block diagonal matrix with blocks $(1)$ and $J_2(2)$.
> Decide which operator is weakly semisimple. Explain why weak semisimplicity does not imply diagonalizability of $T$.

## Hints

> [!hint]- Hint 1
> For a surjective map $f$, use stabilization of $\ker f\subseteq\ker f^2\subseteq\cdots$. For the comparison map, identify its kernel as $\ker S\cap SM$ and translate its surjectivity into $M=\ker S+SM$.

> [!hint]- Hint 2
> If $M=\ker S+SM$, applying $S$ gives $SM=S^2M$. Thus $S:SM\to SM$ is surjective on a Noetherian submodule. For the examples, compute $T-I$ before computing either quotient.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent algebraic derivation of an adaptation of Lemma 2.1.3. The proof uses the ascending-chain definition of a Noetherian module and elementary quotient maps.
>
> **(a) Surjective endomorphisms.** Let $N$ be Noetherian and let $f:N\to N$ be surjective. There is an $n\ge1$ such that $\ker f^n=\ker f^{n+1}$. For $x\in\ker f$, surjectivity of $f^n$ supplies $y\in N$ with $f^ny=x$. Then $f^{n+1}y=fx=0$, so $y\in\ker f^{n+1}=\ker f^n$. Consequently $x=f^ny=0$. This proves injectivity. This property is often called the **Hopfian property**.
>
> If $M_T=0$, then $SM=M$, so $S:M\to M$ is surjective. Applying the result just proved to $S$ gives $\ker S=0$, which is $M^T=0$.
>
> **(b) Surjectivity forces a direct sum.** By definition, $q$ is surjective exactly when each $m\in M$ differs from some $k\in\ker S$ by an element of $SM$. Equivalently,
> $$
> M=\ker S+SM.
> $$
> Applying $S$ to this equality gives
> $$
> SM=S(\ker S)+S(SM)=S^2M.
> $$
> Hence $S:SM\to SM$ is surjective. The submodule $SM$ is Noetherian: every ascending chain of its submodules is also an ascending chain of submodules of $M$. Part (a) therefore makes this restriction injective as well. Its kernel is
> $$
> \ker(S|_{SM})=\ker S\cap SM=0.
> $$
> The preceding sum is consequently direct. The kernel of $q$ is exactly this intersection, so $q$ is injective and surjective, hence an isomorphism.
>
> Conversely, if $M=\ker S\oplus SM$, every quotient class modulo $SM$ has a unique representative in $\ker S$, so $q$ is an isomorphism. An isomorphism is surjective, completing the three equivalences. The same argument already proved that $S|_{SM}$ is an automorphism. Both summands are $T$-stable: $T$ acts as the identity on $\ker S$, and $TS=ST$ makes $SM$ stable under $T$ and $T^{-1}$.
>
> **(c) A nontrivial Jordan block at $1$.** For the standard basis $e_1,e_2$ of $\mathbb Q^2$,
> $$
> T_1-I=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
> \ker(T_1-I)=\mathbb Qe_1,\qquad
> (T_1-I)\mathbb Q^2=\mathbb Qe_1.
> $$
> Thus the invariants are $\mathbb Qe_1$, the coinvariants are the one-dimensional quotient with basis $\bar e_2$, and $q(e_1)=0$. The comparison map is zero between two nonzero one-dimensional spaces. Therefore $T_1$ is not weakly semisimple, despite equality of the two dimensions.
>
> For $T_2$, use the standard basis $e_1,e_2,e_3$. On $\mathbb Qe_1$, $T_2-I$ is zero; on $W=\mathbb Qe_2\oplus\mathbb Qe_3$, it has matrix
> $$
> J_2(2)-I=\begin{pmatrix}1&1\\0&1\end{pmatrix},
> $$
> whose determinant is $1$. Hence
> $$
> M^{T_2}=\mathbb Qe_1,\qquad (T_2-I)M=W,\qquad
> M_{T_2}=M/W=\mathbb Q\bar e_1,
> $$
> and $q(e_1)=\bar e_1$ is an isomorphism. Thus $T_2$ is weakly semisimple. Its $2$-eigenspace is $\mathbb Qe_2$, of dimension $1$, whereas the $2$-block has dimension $2$. Together with the $1$-eigenspace, its eigenspaces span only a two-dimensional subspace of $M$. It is therefore not diagonalizable. Weak semisimplicity permits this Jordan block away from the eigenvalue $1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Invariants Coinvariants and Weak Semisimplicity|Invariants, Coinvariants, and Weak Semisimplicity]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- **Source and adaptation status:** Definition 2.1.2 and the statement and proof of Lemma 2.1.3 were checked on a 200 dpi rendering of the original PDF [Liu–Tian–Xiao–Zhang–Zhu, §2.1, printed p. 121, PDF p. 15]. This is a newly composed proof exercise, not an exercise numbered LA588 or 2.1.3 in the paper.
- **Change of setting:** The source takes a continuous action of the procyclic group $\Gamma\cong\widehat{\mathbb Z}$ on a finite module over an appropriate $\ell$-adic coefficient ring, and puts $T=\gamma$ for a topological generator. Here the argument is isolated for an automorphism of a Noetherian module; no claim is made that every such automorphism extends to a continuous procyclic action.
- **Terminology boundary:** Over a field, the condition controls the behavior at the eigenvalue $1$. It does not assert that the entire operator is semisimple, as $T_2$ demonstrates. Equality of the dimensions of invariants and coinvariants alone is insufficient, as $T_1$ demonstrates.
- **Routing:** Module Theory is primary because kernels, images, quotient modules, and the Noetherian condition perform the proof. The arithmetic context motivates the source lemma but is not a prerequisite for this exercise.
