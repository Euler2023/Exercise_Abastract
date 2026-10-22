---
title: 'Exercise G341: Abelianization Commutes with Profinite Inverse Limits'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 6, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-6
created: '2026-10-23'
---

# Exercise G341: Abelianization Commutes with Profinite Inverse Limits

## Problem Statement

> [!question] Neukirch IV.2.6
> If $\{G_i\}$ is a projective system of profinite groups and $G=\varprojlim_iG_i$, then $G^{ab}=\varprojlim_iG_i^{ab}$ (see §1, exercise 5).

## Hints

> [!hint]- Hint 1
> 对有向紧群系统，逆极限投影的像是所有后继像的交。先把系统替换成这些稳定像，使投影满射。

> [!hint]- Hint 2
> 对下降的紧子群族，交换子闭包与交相容：在每个有限商中这些子群的像最终稳定。

> [!hint]- Hint 3
> 对满射系统，$[G,G]$ 的闭包投影到各 $G_i$ 的交换子闭包，且相容的交换子闭包坐标可紧性提升；再用紧群短正合列的逆极限正合性。

## Solution

> [!success]- Independent derivation
> 记 $D(H)=\overline{[H,H]}$。对紧群系统，逆极限保持短正合列：给定相容的商坐标，在各坐标的紧纤维乘积中加入相容条件；任意有限多条件可在一个共同后继层提升后投影，故有限交性质保证全局提升。因此
> $$
> 1\longrightarrow\varprojlim D(G_i)\longrightarrow G\longrightarrow\varprojlim G_i^{ab}\longrightarrow1
> $$
> 正合。问题归结为证明 $\varprojlim D(G_i)=D(G)$。
>
> 令 $H_i=\operatorname{im}(G\to G_i)$。紧性给出 $H_i=\bigcap_{j\ge i}\operatorname{im}(G_j\to G_i)$。对有向下降的紧子群族 $(K_j)$，有
> $$
> D(\bigcap_jK_j)=\bigcap_jD(K_j).
> $$
> 证明是把两边投影到任意有限商：$K_j$ 的像最终稳定，因而其交换子子群也最终稳定；紧性使投影与这些下降交相容。闭子群由所有有限商的像决定，故等式成立。
>
> 现在若 $x=(x_i)\in\varprojlim D(G_i)$，则每个 $x_i$ 属于所有后继 $D(G_j)$ 的像，即所有 $D(\operatorname{im}(G_j\to G_i))$ 的交。由上式，$x_i\in D(H_i)$。
>
> 任一有限交换商 $\chi:G\to A$ 由某个坐标像 $H_i$ 因子化：开核包含有限多个坐标核的交，而有向性使这个交包含某单一后继坐标核。因子映射 $H_i\to A$ 杀死 $D(H_i)$，所以 $\chi(x)=1$。$G/D(G)$ 是 profinite 交换群，其有限商分离点，故 $x\in D(G)$。反向包含由任何同态保持交换子及闭包立即成立。于是 $\varprojlim D(G_i)=D(G)$，上面的正合列给出
> $$
> G^{ab}\simeq\varprojlim_iG_i^{ab}.
> $$
> 两侧均紧 Hausdorff，所得连续双射是拓扑同构；全程不要求原过渡映射满射。

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Commutator Subgroup]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 6, printed p. 274, PDF p. 293]. 独立稳定像与紧性论证；未额外假设印刷题面未给出的过渡满射。
- **Proof input:** 有向紧空间逆极限的有限交构造已在解答中说明。这里 abelianization 始终取闭交换子子群的商。
